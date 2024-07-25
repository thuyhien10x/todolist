export default {
    props: {
        heading: {
            type: String,
            required: true
        },
        theme: {
            type: String,
            default:'dark'
        }
      
    },
    template: `
        <div :class="{'w-200 p-4 border  rounded-lg': true,
           'bg-gray-700 border-gray-600 text-white': theme == 'dark',
           'bg-white border-gray-300 text-black': theme == 'light',

        }">
            <h2 v-if="$slots.heading" class="font-bold mb-2">
                <slot name="heading"/>
            </h2>
            <slot></slot>
            <footer class = "border-gray-600 border-t mt-4 pt-4 text-sm" v-if="$slots.footer">
                <slot name="footer"/>
            </footer>
        </div>
    `,
}
