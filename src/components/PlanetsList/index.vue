<template>
    <div id="loading" v-if="isLoading" v-show="loading">Loading</div>
    <div class="PlanetsList" v-else>
      <h3>Planet List</h3>
      <ul class="list" v-for="list in lists" :key="list">
        <li>Name: {{ list.name }}</li>
        <li>Rotation period: {{ list.rotation_period }}</li>
        <li>Climate: {{ list.climate }}</li>
        <li>Gravity: {{ list.gravity }}</li>
        <li>Created: {{ list.created }}</li>
        <li>URL: {{ list.url }}</li>
      </ul>
    </div>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
