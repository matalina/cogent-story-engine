<script lang="ts">
import thief from '../game/thief';
import enforcer from '../game/enforcer';
import hacker from '../game/hacker';
import character from '../data/character';

const characters = [
  thief,
  enforcer, 
  hacker,
];

let player; 

</script>
<section id="character-sheet">
  <h1 class="text-center font-extrabold text-6xl">Character Sheet</h1>
  <div class="text-center pt-3">
  {#each characters as character}
    <button 
      class="px-3 py-1 bg-gray-200 text-gray-800 rounded mr-3"
      on:click={() => player = character}
    >
      {character.character.concept}
    </button>
  {/each}
  </div>
  {#if player}
  <pre>
    {JSON.stringify(player.character)}
  </pre>
  {/if}
</section>