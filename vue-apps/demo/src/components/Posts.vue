<template>
    <div class="container">
        <table class="table table-striped mt-4">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" :key="post.id">
            <th scope="row"></th>
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'PostsExample',
        data() {
            return {
                posts: [
                    {id: 1, title: 'Post 1', body: 'oooo1'},
                    {id: 2, title: 'Post 2', body: 'oooo2'},
                    {id: 3, title: 'Post 3', body: 'oooo3'},
                    {id: 4, title: 'Post 4', body: 'oooo4'},
                ]
            }
        }
    }
</script>

<style>

</style>