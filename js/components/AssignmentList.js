import Assignment from "./Assignment.js";
import AssignmentCreate from "./AssignmentCreate.js";
import Panel from "./Panel.js";
export default {
    components: { Assignment, AssignmentCreate, Panel },

    template: `
        <Panel v-show="show && assignments.length" class="w-60" id="my-panel">
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{ assignments.length }})</span>
            </h2>
            <button v-show="canToggle" @click="show=false">&times;</button>
        </div>    
      
            <div class="flex gap-2">
                <button 
                    v-for="tag in tags" 
                    :key="tag"
                    @click="currentTag = tag"
                    class="border rounded px-1 py-1 text-xs"
                    :class="{ 'bg-blue-500 text-white': currentTag === tag }"
                >
                    {{ tag }}
                </button>
            </div>
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
               <assignment 
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
            <slot></slot>
            <template #footer>
                my footer goes here
            </template>
        </Panel> 
    `,

    data() {
        return {
            currentTag: 'all',
            show:true
        };
    },

    props: {
        assignments: Array,
        title: String,
        canToggle: {type:Boolean, default:true}
      },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
              
        },
        tags() {
            //them dau ... de chuyen doi tuong set thanh array vi v-for yeu cau 1 mang aray
            return ['all',...new Set(this.assignments.map(a => a.tag))];
        }
    }
}
