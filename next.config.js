module.exports = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg;
    },
    // distDir: 'out',
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
          '/contact': { page: '/contact' },
          '/faq': { page: '/faq' },
          'index': { page: '/index' },
          '/gallery': { page: '/gallery' },
          '/services': { page: '/services' }
        }
      }
    //   target: 'serverless'
}