const inst = {
    data() {
        return {
            nuevaTarea: '',
            tareas: []
        };
    },
    methods: {
        agregarTarea() {
            if (this.nuevaTarea.trim()) {
                this.tareas.push({ texto: this.nuevaTarea, completada: false });
                this.nuevaTarea = '';
            }
        },
        eliminarTarea(indice) {
            this.tareas.splice(indice, 1);
        }
    },
    computed: {
        progreso() {
            const tareasCompletadas = this.tareas.filter(tarea => tarea.completada).length;
            return this.tareas.length ? (tareasCompletadas / this.tareas.length) * 100 : 0;
        }
    }
};
const app = Vue.createApp(inst).mount('#app');
