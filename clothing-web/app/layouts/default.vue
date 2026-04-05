<template>
  <div class="layout">
    <header class="site-header">
      <div class="header-inner">
        <div class="logo">Mi Sitio Web</div>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="site-content">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <p>&copy; 2026 MiSitioWeb. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-header,
.site-footer {
  background: #111827;
  color: #ffffff;
}

.header-inner,
.footer-inner {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.logo {
  font-weight: 700;
  font-size: 1.2rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #60a5fa;
}

.site-content {
  flex: 1;
  width: min(1100px, calc(100% - 2rem));
  margin: 2rem auto;
}

.site-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.95rem;
}
</style>
