import { component, emits, on, wired } from 'capsid'
import { Todo, TodoCollection } from './todo-models'

let id = 0

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

	constructor() {
		this.todos = new TodoCollection()
		this.filter = 'all'
	}

	@emits('update-todo')
	__mount__() {
	}

	@on('keypress', { at: '.new-todo' })
	onNewTodoInput(e: Event) {
		if (e.which !== 13) { // except Enter
			return;
		}
		const title = this.newTodoInput.value?.trim()
		if (!title) {
			return
		}
		this.newTodoInput.value = ''
		this.addTodo(new Todo(`${id++}`, title, false))
	}

	@emits('update-todo')
	addTodo(todo: Todo) {
		this.todos.add(todo)
	}

	@emits('update-todo')
	@on.click.at('.toggle')
	check(e) {
		this.todos.getById(e.target.parentElement.parentElement.id)?.toggle()
	}

	@on('update-todo')
	onUpdateTodo() {
		this.footer.classList.toggle('hidden', this.todos.length === 0)
		this.toggleAllCheckbox.classList.toggle('hidden', this.todos.length === 0)
		this.toggleAllLabel.classList.toggle('hidden', this.todos.length === 0)
		if (this.filter === 'all' && this.todos.length === this.todoList.children.length) {
			this.todos.forEach((todo) => {
				const li = this.todoList.querySelector(`[id="${todo.id}"]`)
				li.classList.toggle('completed', todo.completed)
				li.querySelector('label').textContent = todo.title
				li.querySelector('.toggle').checked = todo.completed
			})
		} else {
			this.todoList.innerHTML = ''
			this.todos.forEach((todo) => {
				const li = document.createElement('li')
				li.innerHTML = `
					<div class="view">
						<input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}/>
						<label>${todo.title}</label>
						<button class="destroy"></button>
					</div>
					<input class="edit" type="text" />
				`
				li.id = todo.id
				li.classList.add('todo')
				li.classList.toggle('completed', todo.completed)
				this.todoList.appendChild(li)
			})
		}
	}
}
