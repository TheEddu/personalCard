tailwind.config = {
    theme: {
        extend: {
            colors: {
                cyber_black: '#0d0d0d',
                neon_blue: '#00ffff',
                neon_purple: '#9f00ff',
                neon_green: '#00ff9f',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                title: ['Orbitron', 'sans-serif'],
            },
            boxShadow: {
                neon: '0 0 10px #0ff, 0 0 20px #0ff',
            },
            backgroundImage: {
                'grid': "radial-gradient(#0ff 1px, transparent 1px)",
            },
        }      
    }
}
