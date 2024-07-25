export default {
    template: `
    <form class="mt-4" @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input style="width:100%" v-model="newAssignment" placeholder="New assignment" class="p-2" />
                <button class="bg-white p-1 border-l" type="submit">Add</button>
            </div>
        </form>
    `,

   

    data() {
        return {
            newAssignment:''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            // alert(this.newAssignment);
            // this.assignments.push({
            //     name: this.newAssignment,
            //     completed: false,
            //     id: this.assignments.length +1,
            // });
            this.newAssignment='';
        }
    }
}