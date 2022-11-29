<template>
    <NewtodoView/>
    <TodolistView/>

</template>
<script>
import NewtodoView from '@/components/newtodoView.vue';
import TodolistView from '@/components/TodolistView.vue';


export default{
    name:'TaskTodoAppView',
    components: { NewtodoView, TodolistView }
}
</script>