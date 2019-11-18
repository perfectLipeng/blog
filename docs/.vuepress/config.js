module.exports = {
    themeConfig: {
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/',
                    ['/b.md','b.md 1234'],
                    ['/test/a.md', 'a.md']
                ]
            },
            // {
            //     title: 'Group 2',
            // }
        ]
    }
}