import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/voidx-docs/markdown-page',
    component: ComponentCreator('/voidx-docs/markdown-page', '035'),
    exact: true
  },
  {
    path: '/voidx-docs/docs',
    component: ComponentCreator('/voidx-docs/docs', 'db7'),
    routes: [
      {
        path: '/voidx-docs/docs',
        component: ComponentCreator('/voidx-docs/docs', '852'),
        routes: [
          {
            path: '/voidx-docs/docs',
            component: ComponentCreator('/voidx-docs/docs', '70e'),
            routes: [
              {
                path: '/voidx-docs/docs/category/tutorial---basics',
                component: ComponentCreator('/voidx-docs/docs/category/tutorial---basics', '328'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/category/tutorial---extras',
                component: ComponentCreator('/voidx-docs/docs/category/tutorial---extras', '9d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/intro',
                component: ComponentCreator('/voidx-docs/docs/intro', 'eac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/voidx-docs/docs/tutorial-basics/congratulations', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/voidx-docs/docs/tutorial-basics/create-a-blog-post', '3ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/voidx-docs/docs/tutorial-basics/create-a-document', '476'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/voidx-docs/docs/tutorial-basics/create-a-page', 'e47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/voidx-docs/docs/tutorial-basics/deploy-your-site', 'b65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/voidx-docs/docs/tutorial-basics/markdown-features', 'ff8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/voidx-docs/docs/tutorial-extras/manage-docs-versions', '83f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voidx-docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/voidx-docs/docs/tutorial-extras/translate-your-site', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/voidx-docs/',
    component: ComponentCreator('/voidx-docs/', '39a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
