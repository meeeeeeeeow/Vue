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
                    :class="answerClass(idx)"
                >
                    {{ ans }}
                </b-list-group-item>
            </b-list-group>

            <b-button
                variant="primary"
                @click="submitAns"
                :disabled="selectedIdx === null || answered"
            >
                Submit
            </b-button>
            <b-button @click="next" variant="success">
                Next
            </b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: {  // receive the parameters (static)
        currQuestion: Object,
        next: Function,
        increment: Function
    },
    data() {  // internal data (return params)
        return {
            selectedIdx: null,
            correctIdx: null,
            shuffledAns: [],
            answered: false
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
        currQuestion: {
            immediate: true,  // true -> call handler when init
            handler() {
                // when the watched data change, call this function
                this.selectedIdx = null
                this.answered = false
                this.shuffleAns()
            }
        }
        // currQuestion() {
        //     this.selectedIdx = null
        //     this.shuffleAns()
        // }
    },
    methods: {
        selectAns(idx) {
            this.selectedIdx = idx
        },
        shuffleAns() {
            let answers = [...this.currQuestion.incorrect_answers, this.currQuestion.correct_answer]
            this.shuffledAns = _.shuffle(answers)
            this.correctIdx = this.shuffledAns.indexOf(this.currQuestion.correct_answer)
            // console.log(this.correctIdx)
        },
        submitAns() {
            let isCorrect = false
            if (this.selectedIdx === this.correctIdx) {
                isCorrect = true
            }

            this.answered = true
            this.increment(isCorrect)
        },
        answerClass(idx) {
            let answerClass = ''
            if (!this.answered && this.selectedIdx === idx) {
                answerClass = 'selected'
            }
            else if (this.answered && this.correctIdx === idx) {
                answerClass = 'correct'
            }
            else if (this.answered && this.selectedIdx === idx) {
                answerClass = 'incorrect'
            }

            return answerClass
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