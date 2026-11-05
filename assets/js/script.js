    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar-container');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            navbar.classList.add('nav-hidden');
        } 
        else {
            navbar.classList.remove('nav-hidden');
        }
        
        lastScrollY = window.scrollY;
    });


document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Mencegah aksi default (lompat instan)
        e.preventDefault();

        // Mengambil target ID dari atribut href (misal: #section-produk)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Mengatur jarak offset (misal: 80px untuk tinggi navbar Anda)
            // Ubah angka 80 menjadi 0 jika tidak ada navbar yang menempel di atas
            const navbarOffset = 80; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

            // Melakukan animasi scroll smooth bawaan browser melalui JS
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

