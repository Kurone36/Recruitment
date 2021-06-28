<template>
  <div id="loading" v-if="isLoading">Loading</div>
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
      <template>
        <vs-pagination v-model="currentPage" @input="pageNumber">
          <div class="pagination-row">
              <button class="pagination-button" @click="pageNumber -= 1 ">Previous</button>
              <span v-for="(list, index) in new Array(10)" :key="index">
                  <button class="pagination-button" @click="pageNumber = index + 1 ">{{index + 1}}</button>
              </span>
              <button class="pagination-button" @click="pageNumber += 1 ">Next</button>
            </div> 
        </vs-pagination>
      </template>
  </div>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src= "./component.js"></script>
