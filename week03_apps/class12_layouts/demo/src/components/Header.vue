<template>
    <header>
        <div class="header">
            <button @click="openMenu">
                menu
            </button>
            <nav>
                <div class="links first">
                <a href="#">1</a>
                <a href="#">2</a>
                </div>
                <div class="title-link">
                    title
                </div>
                <div class="links second"> 
                    <a href="#">3</a>
                    <a href="#">4</a>
                </div>
            </nav>
            <button>
                search
            </button>
        </div>
        <div class="overlay-nav" v-show="menuIsOpen">
            <div class="mobile-nav">
                <a href="#">link 1</a>
                <a href="#">link 2</a>
                <a href="#">link 3</a>
                <a href="#">link 4</a>
            </div>
            <button @click="closeMenu">
                close
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        openMenu() {
            this.menuIsOpen = true;
        },
        closeMenu() {
            this.menuIsOpen = false;
        }
    },
    data() {
        return {
            menuIsOpen: false
        }
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
    }
    .links {
        display: none;
    }
    .overlay-nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: white;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .mobile-nav {
        display: flex;
        flex-direction: column;
    }
    a {
        justify-content: center;
        text-align: center;
    }
    @media  (min-width: 500px) {
        button {
            display: none;
        }
        .links {
            display: block;
        }
        .links.first a {
            padding-right: 100px;
        }
        .links.second a {
            padding-left: 100px;
        }
        nav {
            display: flex;
            justify-content: space-around;
            width: 75vw;
            margin: 0 auto;
        }
    }
</style>
