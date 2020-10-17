import { component, emits, on, wired } from 'capsid';
import { Todo, TodoCollection } from './todo-models';

let id = 0;

type Filter = 'all' | 'completed' | 'uncompleted';

@component('todoapp')
class TodoApp {
	todos: TodoCollection;
	filter: Filter;

	@wired('.new-todo')
	newTodoInput: HTMLInputElement;

	@wired('.todo-list')
	todoList: HTMLUListElement;

	@wired('.toggle-all')
	toggleAllCheckbox: HTMLElement;

	@wired('label[for="toggle-all"]')
	toggleAllLabel: HTMLElement;

	@wired('.footer')
	footer: HTMLElement;

	@wired('.todo-count strong')
	todoCount: HTMLElement;

	@wired('.todo-count .plural')
	todoCountPlural: HTMLElement;

	@wired('a[href="#/all"]')
	allFilterButton: HTMLElement;

	@wired('a[href="#/active"]')
	activeFilterButton: HTMLElement;

	@wired('a[href="#/completed"]')
	completedFilterButton: HTMLElement;

	@wired('.clear-completed')
	clearCompletedButton: HTMLButtonElement;

	constructor() {
		this.todos = TodoCollection.restore();
		id = this.todos.maxId() + 1;
		this.filter = 'all';

		window.onhashchange = () => {
			this.onChangeFilter();
		};
	}

	@emits('update-todo')
	__mount__() {
		this.onChangeFilter();
	}

	@on('keypress', { at: '.new-todo' })
	onNewTodoInput(e: Event) {
		if (e.which !== 13) {
			// except Enter
			return;
		}
		const title = this.newTodoInput.value?.trim();
		if (!title) {
			return;
		}
		this.newTodoInput.value = '';
		this.addTodo(new Todo(`${id++}`, title, false));
	}

	@emits('update-todo')
	addTodo(todo: Todo) {
		this.todos.add(todo);
	}

	@emits('update-todo')
	@on.click.at('.toggle')
	check(e) {
		this.todos.getById(e.target.parentElement.parentElement.id)?.toggle();
	}

	@emits('update-todo')
	@on.click.at('.toggle-all')
	toggleAll(e) {
		if (e.target.checked) {
			this.todos.completeAll();
		} else {
			this.todos.uncompleteAll();
		}
	}

	@emits('update-todo')
	@on.click.at('.destroy')
	destroy(e) {
		const toRemove = this.todos.getById(
			e.target.parentElement.parentElement.id
		);
		this.todos.remove(toRemove);
	}

	@emits('update-todo')
	@on.click.at('.clear-completed')
	clearCompleted() {
		this.todos.completed().forEach((todo) => {
			this.todos.remove(todo);
		});
	}

	@on('dblclick', { at: '.todo > .view > label' })
	startEditing(e) {
		const todoItem = e.target.parentElement.parentElement;
		const todo = this.todos.getById(todoItem.id);
		todoItem.classList.add('editing');
		const editInput = todoItem.querySelector('.edit');
		editInput.value = todo.title;
		editInput.focus();
	}

	@on('keypress', { at: '.edit' })
	@on('keydown', { at: '.edit' })
	onCancelOrFinishEditing(e) {
		const todoItem = e.target.parentElement;
		if (e.which === 13 /* ENTER */) {
			this.todos.getById(todoItem.id).title = e.target.value;
			todoItem.classList.remove('editing');
			this.onUpdateTodo();
		} else if (e.which === 27 /* ESC */) {
			todoItem.classList.remove('editing');
		}
	}

	getFilterFromString(str: string): Filter {
		switch (str) {
			case 'active':
				return 'active';
			case 'completed':
				return 'completed';
			default:
				return 'all';
		}
	}

	@emits('update-todo')
	onChangeFilter() {
		this.filter = this.getFilterFromString(location.hash.slice(2));
		this.allFilterButton.classList.toggle('selected', this.filter === 'all');
		this.activeFilterButton.classList.toggle(
			'selected',
			this.filter === 'active'
		);
		this.completedFilterButton.classList.toggle(
			'selected',
			this.filter === 'completed'
		);
	}

	@on('update-todo')
	onUpdateTodo() {
		this.todos.save();
		const uncompleted = this.todos.uncompleted();
		const completed = this.todos.completed();
		this.todoCount.textContent = `${uncompleted.length}`;
		this.todoCountPlural.classList.toggle('hidden', uncompleted.length === 1);
		this.footer.classList.toggle('hidden', this.todos.length === 0);
		this.toggleAllCheckbox.classList.toggle('hidden', this.todos.length === 0);
		this.toggleAllLabel.classList.toggle('hidden', this.todos.length === 0);
		this.toggleAllCheckbox.checked = uncompleted.length === 0;
		this.clearCompletedButton.classList.toggle(
			'hidden',
			completed.length === 0
		);
		if (
			this.filter === 'all' &&
			this.todos.length === this.todoList.children.length
		) {
			this.todos.forEach((todo) => {
				const li = this.todoList.querySelector(`[id="${todo.id}"]`);
				li.classList.toggle('completed', todo.completed);
				li.querySelector('label').textContent = todo.title;
				li.querySelector('.toggle').checked = todo.completed;
			});
		} else {
			const visibleItems =
				this.filter === 'active'
					? uncompleted
					: this.filter === 'completed'
					? completed
					: this.todos;
			this.todoList.innerHTML = '';
			visibleItems.forEach((todo) => {
				const li = document.createElement('li');
				li.innerHTML = `
					<div class="view">
						<input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}/>
						<label>${todo.title}</label>
						<button class="destroy"></button>
					</div>
					<input class="edit" type="text" />
				`;
				li.id = todo.id;
				li.classList.add('todo');
				li.classList.toggle('completed', todo.completed);
				this.todoList.appendChild(li);
			});
		}
	}
}
