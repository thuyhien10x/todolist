import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js"
export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
            <assignment-create @add="add" ></assignment-create>

            </assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed "></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [
              
            ],
           
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },
    
  

    created() {
        fetch('http://localhost:3001/assignments') //them dau ngoac don
            .then(response => response.json())
            .then(data => {
                this.assignments = data; // de assignment thanh data trong db,json
            })
            .catch(error => {
                console.error('Error fetching assignments:', error);
            });
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length +1,
            })
        }
    }
}
