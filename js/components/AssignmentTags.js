export default {
    template: `
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{ assignments.length }})</span>
        </h2>
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
    </section>
    `,
    props: {
        initialTags: Array,
        assignments: Array,
        title: String
    },
    data() {
        return {
            currentTag: 'all'
        }
    },
    computed: {
        tags() {
            // Thêm dấu ... để chuyển đối tượng Set thành Array vì v-for yêu cầu một mảng Array
            return ['all', ...new Set(this.initialTags)];
        },
        filteredAssignments() {
            return this.currentTag === 'all'
                ? this.assignments
                : this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}
