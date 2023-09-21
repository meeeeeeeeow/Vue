<template>
    <div class="question-box-container">
        <b-jumbotron>
            <template #lead>
                {{ currQuestion.question }}
            </template>

            <hr class="my-4">

            <b-list-group>
                <b-list-group-item
                    v-for="(ans, idx) in answers"
                    :key="idx"
                    @click="selectAns(idx)"
                    :class="[selectedIdx === idx ? 'selected' : '']"
                >
                    {{ ans }}
                </b-list-group-item>
            </b-list-group>

            <b-button variant="primary" href="#">Submit</b-button>
            <b-button @click="next" variant="success" href="#">Next</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: {  // receive the parameters (static)
        currQuestion: Object,
        next: Function
    },
    data() {  // internal data (return params)
        return {
            selectedIdx: null,
            shuffledAns: []
        }
    },
    computed: {
        answers() {
            let answers = [...this.currQuestion.incorrect_answers]  // ... -> iteration
            answers.push(this.currQuestion.correct_answer)
            return answers
        }
    },
    watch: {
        currQuestion() {
            this.selectedIdx = null
            this.shuffleAns()
        }
    },
    methods: {
        selectAns(idx) {
            this.selectedIdx = idx
        },
        shuffleAns() {
            let answers = [...this.currQuestion.incorrect_answers, this.currQuestion.correct_answer]
            this.shuffledAns = _.shffle(answers)
        }
    },
    mounted() {
        // created -> computed (html rendering) -> mounted (finish rendering)
        // function that will be called directly after rendering
    }
}
</script>

<style scoped>
.list-group {
    margin-bottom: 15px;
}
.list-group-item:hover {
    background: #eee;
    cursor: pointer;
}
.btn {
    margin: 0 5px;
}

.selected {
    background-color: lightblue;
}
.correct {
    background-color: lightgreen;
}
.incorrect {
    background-color: red;
}
</style>