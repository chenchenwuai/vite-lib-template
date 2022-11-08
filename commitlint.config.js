/* eslint-env node */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    questions: {
      type: {
        description: '选择 Commit 类型',
        enum: {
          feat: {
            description: '新增功能',
            title: 'Features',
            emoji: '✨'
          },
          fix: {
            description: '修复bug',
            title: 'Bug Fixes',
            emoji: '🐛'
          },
          docs: {
            description: '文档修改',
            title: 'Documentation',
            emoji: '📚'
          },
          style: {
            description: '不影响程序逻辑的修改（空白字符，代码格式化，分号等）',
            title: 'Styles',
            emoji: '💎'
          },
          refactor: {
            description: '代码重构，（既不是代码修复也不是添加新功能）',
            title: 'Code Refactoring',
            emoji: '📦'
          },
          perf: {
            description: '性能、体验相关的修改',
            title: 'Performance Improvements',
            emoji: '🚀'
          },
          test: {
            description: '测试相关的修改',
            title: 'Tests',
            emoji: '🚨'
          },
          build: {
            description: '影响构建系统或外部依赖的修改 (例如: npm、vite的配置)',
            title: 'Builds',
            emoji: '🛠'
          },
          ci: {
            description: '修改项目的持续集成流程（Circle、Travis等）的提交',
            title: 'Continuous Integrations',
            emoji: '⚙️'
          },
          chore: {
            description: '其他没有更改src或测试用例相关的修改',
            title: 'Chores',
            emoji: '♻️'
          },
          revert: {
            description: '回滚某个更早的提交',
            title: 'Reverts',
            emoji: '🗑'
          }
        }
      },
      scope: {
        description: 'Commit 的影响范围 (例如：模块、组件或文件名称)（选填）'
      },
      subject: {
        description: 'Commit 的简短描述'
      },
      body: {
        description: 'Commit 的详细描述（选填）'
      },
      isBreaking: {
        description: '这是一个破坏性的 Commit 吗?'
      },
      breakingBody: {
        description: '破坏性的修改需要一个主体描述，请输入此次修改的较长描述'
      },
      breaking: {
        description: '描述此次破坏性修改'
      },
      isIssueAffected: {
        description: 'Commit 是否有关联的未关闭 issues?'
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)'
      }
    }
  }
}
