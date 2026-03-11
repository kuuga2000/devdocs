const DEV_DOCS = {
    project: {
        name: "Docker DevDocs",
        description: "Static documentation for Docker commands, suitable for GitHub Pages.",
    },
    sections: [
        {
            id: "git",
            title: "Git",
            summary: "Essential Git commands for daily version control work.",
            icon: "git-branch",
            iconColor: "text-orange-500",
            groups: [
                {
                    title: "Basic",
                    commands: [
                        {
                            command: "git init",
                            description: "Initialize a new local Git repository.",
                            example: "git init",
                            tags: ["git", "init", "repository"],
                        },
                        {
                            command: "git status",
                            description: "Show the current working tree status.",
                            example: "git status",
                            tags: ["git", "status", "changes"],
                        },
                        {
                            command: "git add .",
                            description: "Stage all changed files for the next commit.",
                            example: "git add .",
                            tags: ["git", "add", "stage"],
                        },
                        {
                            command: "git commit -m \"message\"",
                            description: "Create a commit with a descriptive message.",
                            example: "git commit -m \"add docker docs\"",
                            tags: ["git", "commit", "message"],
                        },
                    ],
                },
                {
                    title: "Branching",
                    commands: [
                        {
                            command: "git branch",
                            description: "List local branches in the repository.",
                            example: "git branch",
                            tags: ["git", "branch", "list"],
                        },
                        {
                            command: "git checkout -b feature/docs",
                            description: "Create and switch to a new branch.",
                            example: "git checkout -b feature/docker-docs",
                            tags: ["git", "checkout", "branch"],
                        },
                        {
                            command: "git merge feature/docs",
                            description: "Merge another branch into the current branch.",
                            example: "git merge feature/docker-docs",
                            tags: ["git", "merge", "branch"],
                        },
                        {
                            command: "git rebase main",
                            description: "Replay current branch commits on top of another branch.",
                            example: "git rebase main",
                            tags: ["git", "rebase", "history"],
                        },
                    ],
                },
                {
                    title: "Remote",
                    commands: [
                        {
                            command: "git pull origin main",
                            description: "Fetch and merge changes from the remote branch.",
                            example: "git pull origin main",
                            tags: ["git", "pull", "remote"],
                        },
                        {
                            command: "git push origin main",
                            description: "Push local commits to the remote branch.",
                            example: "git push origin main",
                            tags: ["git", "push", "remote"],
                        },
                    ],
                },
                {
                    title: "History and Recovery",
                    commands: [
                        {
                            command: "git log --oneline --graph --decorate",
                            description: "Show a compact visual history of commits and branches.",
                            example: "git log --oneline --graph --decorate",
                            tags: ["git", "log", "history"],
                        },
                        {
                            command: "git stash",
                            description: "Temporarily save uncommitted changes without committing them.",
                            example: "git stash",
                            tags: ["git", "stash", "save"],
                        },
                        {
                            command: "git stash pop",
                            description: "Restore the latest stashed changes and remove them from the stash list.",
                            example: "git stash pop",
                            tags: ["git", "stash", "restore"],
                        },
                        {
                            command: "git reset --soft HEAD~1",
                            description: "Undo the last commit but keep the changes staged.",
                            example: "git reset --soft HEAD~1",
                            tags: ["git", "reset", "undo"],
                        },
                        {
                            command: "git diff",
                            description: "Show unstaged changes in the working tree.",
                            example: "git diff",
                            tags: ["git", "diff", "changes"],
                        },
                        {
                            command: "git diff --staged",
                            description: "Show staged changes that will go into the next commit.",
                            example: "git diff --staged",
                            tags: ["git", "diff", "staged"],
                        },
                    ],
                },
            ],
        },
        {
            id: "github",
            title: "GitHub",
            summary: "Common GitHub CLI commands for authentication, repositories, and pull requests.",
            icon: "github",
            iconColor: "text-slate-700",
            groups: [
                {
                    title: "Authentication",
                    commands: [
                        {
                            command: "gh auth login",
                            description: "Authenticate the GitHub CLI with your GitHub account.",
                            example: "gh auth login",
                            tags: ["github", "auth", "login", "gh"],
                        },
                    ],
                },
                {
                    title: "Repositories",
                    commands: [
                        {
                            command: "gh repo clone owner/repo",
                            description: "Clone a GitHub repository using the GitHub CLI.",
                            example: "gh repo clone cli/cli",
                            tags: ["github", "clone", "repository", "gh"],
                        },
                        {
                            command: "gh repo create my-project --public",
                            description: "Create a new GitHub repository from the terminal.",
                            example: "gh repo create my-project --public --source=. --push",
                            tags: ["github", "create", "repository", "gh"],
                        },
                    ],
                },
                {
                    title: "Pull Requests",
                    commands: [
                        {
                            command: "gh pr status",
                            description: "Show the current status of pull requests relevant to you.",
                            example: "gh pr status",
                            tags: ["github", "pull-request", "status", "gh"],
                        },
                        {
                            command: "gh pr create --fill",
                            description: "Create a new pull request using the current branch and commit info.",
                            example: "gh pr create --fill",
                            tags: ["github", "pull-request", "create", "gh"],
                        },
                        {
                            command: "gh pr checkout 24",
                            description: "Check out a pull request locally by number.",
                            example: "gh pr checkout 24",
                            tags: ["github", "pull-request", "checkout", "gh"],
                        },
                    ],
                },
            ],
        },
        {
            id: "docker",
            title: "Docker",
            summary: "Core Docker commands for containers, images, debugging, storage, networking, and Compose.",
            icon: "container",
            iconColor: "text-cyan-500",
            groups: [
                {
                    title: "Container Lifecycle",
                    commands: [
                        {
                            command: "docker ps",
                            description: "Show running containers.",
                            example: "docker ps",
                            tags: ["containers", "list", "running"],
                        },
                        {
                            command: "docker ps -a",
                            description: "Show all containers, including stopped ones.",
                            example: "docker ps -a",
                            tags: ["containers", "history"],
                        },
                        {
                            command: "docker run -d --name web nginx",
                            description: "Create and start a container in detached mode.",
                            example: "docker run -d --name web -p 8080:80 nginx",
                            tags: ["run", "start", "detached"],
                        },
                        {
                            command: "docker stop web",
                            description: "Gracefully stop a running container.",
                            example: "docker stop web",
                            tags: ["stop", "container"],
                        },
                        {
                            command: "docker start web",
                            description: "Start a stopped container again.",
                            example: "docker start web",
                            tags: ["start", "container"],
                        },
                        {
                            command: "docker rm web",
                            description: "Remove a stopped container.",
                            example: "docker rm web",
                            tags: ["remove", "cleanup"],
                        },
                    ],
                },
                {
                    title: "Images",
                    commands: [
                        {
                            command: "docker images",
                            description: "List locally available images.",
                            example: "docker images",
                            tags: ["images", "list"],
                        },
                        {
                            command: "docker build -t my-app .",
                            description: "Build an image from the current directory Dockerfile.",
                            example: "docker build -t my-app:latest .",
                            tags: ["build", "dockerfile"],
                        },
                        {
                            command: "docker pull redis",
                            description: "Download an image from a registry.",
                            example: "docker pull redis:7",
                            tags: ["pull", "registry"],
                        },
                        {
                            command: "docker rmi my-app",
                            description: "Remove a local image by name or ID.",
                            example: "docker rmi my-app:latest",
                            tags: ["remove", "images"],
                        },
                    ],
                },
                {
                    title: "Logs and Debugging",
                    commands: [
                        {
                            command: "docker logs web",
                            description: "Print container logs.",
                            example: "docker logs web",
                            tags: ["logs", "debug"],
                        },
                        {
                            command: "docker logs -f web",
                            description: "Follow logs in real time.",
                            example: "docker logs -f web",
                            tags: ["logs", "follow"],
                        },
                        {
                            command: "docker exec -it web sh",
                            description: "Open an interactive shell inside a container.",
                            example: "docker exec -it web sh",
                            tags: ["exec", "shell", "debug"],
                        },
                        {
                            command: "docker inspect web",
                            description: "Show detailed JSON metadata for a container.",
                            example: "docker inspect web",
                            tags: ["inspect", "json", "metadata"],
                        },
                    ],
                },
                {
                    title: "Networks and Volumes",
                    commands: [
                        {
                            command: "docker volume ls",
                            description: "List Docker volumes.",
                            example: "docker volume ls",
                            tags: ["volume", "storage"],
                        },
                        {
                            command: "docker volume create app-data",
                            description: "Create a named volume for persistent data.",
                            example: "docker volume create app-data",
                            tags: ["volume", "create"],
                        },
                        {
                            command: "docker network ls",
                            description: "List Docker networks.",
                            example: "docker network ls",
                            tags: ["network", "list"],
                        },
                        {
                            command: "docker run -d --name api --network app-net my-api",
                            description: "Run a container attached to a custom network.",
                            example: "docker run -d --name api --network app-net my-api",
                            tags: ["network", "connect"],
                        },
                    ],
                },
                {
                    title: "Docker Compose",
                    commands: [
                        {
                            command: "docker compose up -d",
                            description: "Start services from a Compose file in detached mode.",
                            example: "docker compose up -d",
                            tags: ["compose", "up"],
                        },
                        {
                            command: "docker compose down",
                            description: "Stop and remove services created by Compose.",
                            example: "docker compose down",
                            tags: ["compose", "down"],
                        },
                        {
                            command: "docker compose logs -f",
                            description: "Stream logs from all Compose services.",
                            example: "docker compose logs -f",
                            tags: ["compose", "logs"],
                        },
                        {
                            command: "docker compose exec app sh",
                            description: "Run a shell in a service container.",
                            example: "docker compose exec app sh",
                            tags: ["compose", "exec"],
                        },
                    ],
                },
            ],
        },
        {
            id: "npm",
            title: "npm",
            summary: "Common npm commands for package installation, scripts, and dependency management.",
            icon: "package",
            iconColor: "text-red-500",
            groups: [
                {
                    title: "Setup and Install",
                    commands: [
                        {
                            command: "npm init -y",
                            description: "Create a new package.json with default values.",
                            example: "npm init -y",
                            tags: ["npm", "init", "package"],
                        },
                        {
                            command: "npm install",
                            description: "Install dependencies listed in package.json.",
                            example: "npm install",
                            tags: ["npm", "install", "dependencies"],
                        },
                        {
                            command: "npm install lodash",
                            description: "Install a package as a project dependency.",
                            example: "npm install express",
                            tags: ["npm", "install", "package"],
                        },
                        {
                            command: "npm install -D vite",
                            description: "Install a package as a development dependency.",
                            example: "npm install -D typescript",
                            tags: ["npm", "install", "devDependency"],
                        },
                    ],
                },
                {
                    title: "Scripts",
                    commands: [
                        {
                            command: "npm run dev",
                            description: "Run the dev script from package.json.",
                            example: "npm run dev",
                            tags: ["npm", "run", "scripts"],
                        },
                        {
                            command: "npm run build",
                            description: "Run the build script from package.json.",
                            example: "npm run build",
                            tags: ["npm", "run", "build"],
                        },
                        {
                            command: "npm test",
                            description: "Run the test script.",
                            example: "npm test",
                            tags: ["npm", "test", "scripts"],
                        },
                    ],
                },
                {
                    title: "Maintenance",
                    commands: [
                        {
                            command: "npm outdated",
                            description: "Show packages that have newer versions available.",
                            example: "npm outdated",
                            tags: ["npm", "outdated", "dependencies"],
                        },
                        {
                            command: "npm update",
                            description: "Update installed packages within version ranges.",
                            example: "npm update",
                            tags: ["npm", "update", "dependencies"],
                        },
                        {
                            command: "npm uninstall lodash",
                            description: "Remove a package from the project.",
                            example: "npm uninstall express",
                            tags: ["npm", "uninstall", "remove"],
                        },
                    ],
                },
            ],
        },
        {
            id: "pnpm",
            title: "pnpm",
            summary: "Common pnpm commands for fast installs, workspace scripts, and dependency management.",
            icon: "package-2",
            iconColor: "text-amber-600",
            groups: [
                {
                    title: "Setup and Install",
                    commands: [
                        {
                            command: "pnpm init",
                            description: "Create a new package.json interactively.",
                            example: "pnpm init",
                            tags: ["pnpm", "init", "package"],
                        },
                        {
                            command: "pnpm install",
                            description: "Install dependencies from package.json.",
                            example: "pnpm install",
                            tags: ["pnpm", "install", "dependencies"],
                        },
                        {
                            command: "pnpm add react",
                            description: "Add a package as a dependency.",
                            example: "pnpm add react",
                            tags: ["pnpm", "add", "package"],
                        },
                        {
                            command: "pnpm add -D typescript",
                            description: "Add a package as a development dependency.",
                            example: "pnpm add -D vite",
                            tags: ["pnpm", "add", "devDependency"],
                        },
                    ],
                },
                {
                    title: "Scripts",
                    commands: [
                        {
                            command: "pnpm dev",
                            description: "Run the dev script defined in package.json.",
                            example: "pnpm dev",
                            tags: ["pnpm", "dev", "scripts"],
                        },
                        {
                            command: "pnpm build",
                            description: "Run the build script defined in package.json.",
                            example: "pnpm build",
                            tags: ["pnpm", "build", "scripts"],
                        },
                        {
                            command: "pnpm test",
                            description: "Run the test script defined in package.json.",
                            example: "pnpm test",
                            tags: ["pnpm", "test", "scripts"],
                        },
                    ],
                },
                {
                    title: "Maintenance",
                    commands: [
                        {
                            command: "pnpm outdated",
                            description: "List dependencies with newer versions available.",
                            example: "pnpm outdated",
                            tags: ["pnpm", "outdated", "dependencies"],
                        },
                        {
                            command: "pnpm update",
                            description: "Update dependencies according to version ranges.",
                            example: "pnpm update",
                            tags: ["pnpm", "update", "dependencies"],
                        },
                        {
                            command: "pnpm remove react",
                            description: "Remove a dependency from the project.",
                            example: "pnpm remove react",
                            tags: ["pnpm", "remove", "dependencies"],
                        },
                    ],
                },
            ],
        },
    ],
};
