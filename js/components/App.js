import Assignments from "./Assignments.js";
import Panel from "./Panel.js";
export default {
    components: { Assignments,Panel },

    template: `
        <div class="grid gap-6">
        <assignments></assignments>    
        

      <panel theme="light">
           This is my default content.
     
       <template v-slot:heading>
           Hi There
       </template>
       <template v-slot:footer>
           Click here to learn more
       </template>
      </panel>

        </div>
    `,
}