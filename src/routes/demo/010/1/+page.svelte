<script>

	import { direction } from "../stores";

</script>
<p>Page 1</p>

<p><a href="/demo/010/" on:click={()=>$direction = "LEFT"}>Back</a></p>
<p><a href="/demo/010/1/1" on:click={()=>$direction = "RIGHT"}>One level deeper</a></p>
