<template>
    <div>
        <h3>Edit the User</h3>

        <div id="data" style="height: 1700px">data</div>
        <p>sd</p>
        <button class="btn btn-primary" @click="confirmed = true">Comfirm</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next()
        } else {
            if (confirm('Are u sure?')) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>
