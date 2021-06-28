<template>
  <div id="loading" v-if="isLoading">Loading</div>
  <div class="PlanetsList" v-else>
    <h3>Planet List</h3>
        <template>
          <ul class="list" v-for="list in lists" :key="list">
            <li>Name: {{ list.name }}</li>
            <li>Rotation period: {{ list.rotation_period }}</li>
            <li>Climate: {{ list.climate }}</li>
            <li>Gravity: {{ list.gravity }}</li>
            <li>Created: {{ list.created }}</li>
            <li>URL: {{ list.url }}</li>
          </ul>
          <div class="pagination-row" >
            <vspagination>
              <button class="pagination-button">Previous</button>
              <span v-for="(list, index) in new Array(10)" :key="index">
                <button class="pagination-button">{{index + 1}}</button>
              </span>
              <button class="pagination-button">Next</button>
            </vspagination>
          </div>
        </template>
  </div>
</template>

<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
