<template>
  <div v-cloak
data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
    role="banner" class="navbar w-nav">
    <div class="padding-global">
      <div class="container w-container">
        <div class="navbar-component"><a
href="/" data-w-id="6deb3682-e1f7-9f5f-adeb-87fc1448026f" aria-current="page"
            class="brand w-nav-brand w--current">
            <img
src="/logo.svg" style="height: 80%;width: 40%;"
              loading="lazy" alt="Logo Navbar" />
            </a>
          <div class="nav-menu-wrap">
            <div>
              <nav role="navigation" class="nav-menu w-nav-menu">
                <a href="/" aria-current="page" class="nav-link w-inline-block w--current">
                  <div>Product</div>
                </a>
                <!-- <a href="/features" class="nav-link w-inline-block">
                  <div>Features</div>
                </a> -->
                <a href="/pricing" class="nav-link w-inline-block">
                  <div>Pricing</div>
                </a>
                <div class="mobile-navbar-content"><a href="/guide/overview" target="_blank" class="link-block-navbar w-inline-block">
                    <div>Docs</div>
                  </a><a href="/help" class="link-block-navbar w-inline-block">
                    <div>Help</div>
                  </a><a href="/book-demo" target="_blank" class="primary-button w-inline-block">
                    <div class="text-size-small text-weight-bold">Book a Demo</div>
                  </a>
                  <a href="https://app.tensor-fusion.ai/sign-in" target="_blank" class="primary-button w-inline-block">
                    <div class="text-size-small text-weight-bold">Sign In / Sign Up</div>
                  </a>
                  
                </div>
              </nav>
              <div class="nav-menu-wrap">
                <div class="menu-button w-nav-button">
                  <div class="menu-icon w-icon-nav-menu"></div>
                </div>
              </div>
            </div>
            <div class="right-navbar-content"><a href="/guide/overview" target="_blank" class="link-block-navbar w-inline-block">
                <div>Docs</div>
              </a><a href="/help" class="link-block-navbar w-inline-block">
                <div>Help</div>
              </a><a href="/book-demo" target="_blank" class="secondary-button w-inline-block">
              <div class="button-wrapper">
                <div class="secondary-button-text">
                  <div class="text-weight-bold text-size-small">Book a Demo</div>
                </div>
                <div class="button-icon">
                  <div class="icon-wrapper">
                    <img 
                      loading="lazy"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' fill='%23ffffff'/%3E%3C/svg%3E"
                      alt="Arrow" class="icon" />
                    </div>
                </div>
                <div class="button-icon absolute"></div>
              </div>
            </a>

              <a href="https://app.tensor-fusion.ai/sign-in" target="_blank" class="primary-button w-inline-block">
                <div class="relative">
                  <div class="text-size-small text-weight-bold">Login / Sign Up</div>
                  <!-- <div class="text-size-small text-weight-bold">Join Wait List</div> -->
                </div>
                <div class="button-elipse"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.v-cloak {
  display: none;
}
</style>