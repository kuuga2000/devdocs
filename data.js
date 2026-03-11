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
            id: "nginx",
            title: "Nginx",
            summary: "Clear Nginx commands for creating site configs, enabling them, testing changes, and syncing to a server.",
            icon: "server",
            iconColor: "text-emerald-500",
            groups: [
                {
                    title: "Install and Service",
                    commands: [
                        {
                            command: "sudo apt update && sudo apt install nginx -y",
                            description: "Install Nginx on Ubuntu or Debian.",
                            example: "sudo apt update && sudo apt install nginx -y",
                            tags: ["nginx", "install", "ubuntu", "debian"],
                        },
                        {
                            command: "sudo systemctl status nginx",
                            description: "Check whether the Nginx service is running correctly.",
                            example: "sudo systemctl status nginx",
                            tags: ["nginx", "systemctl", "status"],
                        },
                        {
                            command: "sudo systemctl enable nginx",
                            description: "Start Nginx automatically on server boot.",
                            example: "sudo systemctl enable nginx",
                            tags: ["nginx", "enable", "boot"],
                        },
                    ],
                },
                {
                    title: "Create Site in sites-available",
                    commands: [
                        {
                            command: "sudo nano /etc/nginx/sites-available/example.com",
                            description: "Create or edit a virtual host config in sites-available.",
                            example: "sudo nano /etc/nginx/sites-available/example.com",
                            tags: ["nginx", "sites-available", "config"],
                        },
                        {
                            command: "sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/example.com",
                            description: "Copy the default config as a starting point for a new site.",
                            example: "sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/example.com",
                            tags: ["nginx", "sites-available", "copy"],
                        },
                        {
                            command: "sudo mkdir -p /var/www/example.com/html",
                            description: "Create the document root used by the site config.",
                            example: "sudo mkdir -p /var/www/example.com/html",
                            tags: ["nginx", "root", "web"],
                        },
                        {
                            command: "server { ... }",
                            description: "Basic Nginx server block for a static site using a document root in /var/www.",
                            exampleBlock: `server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;

    root /var/www/example.com/html;
    index index.html index.htm;

    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;

    location / {
        try_files $uri $uri/ =404;
    }
}`,
                            tags: ["nginx", "server-block", "example", "sites-available"],
                        },
                    ],
                },
                {
                    title: "Enable Site and Reload",
                    commands: [
                        {
                            command: "sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/",
                            description: "Enable a site by symlinking it into sites-enabled.",
                            example: "sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/",
                            tags: ["nginx", "sites-enabled", "symlink"],
                        },
                        {
                            command: "sudo nginx -t",
                            description: "Validate the full Nginx configuration before reload or restart.",
                            example: "sudo nginx -t",
                            tags: ["nginx", "test", "validate"],
                        },
                        {
                            command: "sudo systemctl reload nginx",
                            description: "Reload Nginx after a valid config change without stopping traffic.",
                            example: "sudo systemctl reload nginx",
                            tags: ["nginx", "reload", "systemctl"],
                        },
                        {
                            command: "sudo systemctl restart nginx",
                            description: "Fully restart Nginx when a reload is not enough.",
                            example: "sudo systemctl restart nginx",
                            tags: ["nginx", "restart", "systemctl"],
                        },
                    ],
                },
                {
                    title: "Disable and Debug",
                    commands: [
                        {
                            command: "sudo rm /etc/nginx/sites-enabled/example.com",
                            description: "Disable a site by removing its symlink from sites-enabled.",
                            example: "sudo rm /etc/nginx/sites-enabled/example.com",
                            tags: ["nginx", "disable", "sites-enabled"],
                        },
                        {
                            command: "sudo journalctl -xeu nginx.service",
                            description: "Read systemd logs when Nginx fails to start or reload.",
                            example: "sudo journalctl -xeu nginx.service",
                            tags: ["nginx", "logs", "systemd"],
                        },
                        {
                            command: "sudo tail -n 50 /var/log/nginx/error.log",
                            description: "Check recent Nginx error log messages.",
                            example: "sudo tail -n 50 /var/log/nginx/error.log",
                            tags: ["nginx", "logs", "error"],
                        },
                        {
                            command: "sudo ss -tulpn | grep :80",
                            description: "Check whether another process is already using port 80.",
                            example: "sudo ss -tulpn | grep :80",
                            tags: ["nginx", "port", "diagnostic"],
                        },
                    ],
                },
                {
                    title: "Sync Config to Server",
                    commands: [
                        {
                            command: "rsync -av ./nginx/ deploy@example.com:/etc/nginx/sites-available/",
                            description: "Sync local Nginx config files to a remote server.",
                            example: "rsync -av ./nginx/ deploy@example.com:/etc/nginx/sites-available/",
                            tags: ["nginx", "sync", "rsync"],
                        },
                        {
                            command: "scp ./nginx/example.com deploy@example.com:/etc/nginx/sites-available/example.com",
                            description: "Copy a single site config to the remote server.",
                            example: "scp ./nginx/example.com deploy@example.com:/etc/nginx/sites-available/example.com",
                            tags: ["nginx", "sync", "scp"],
                        },
                        {
                            command: "ssh deploy@example.com \"sudo nginx -t && sudo systemctl reload nginx\"",
                            description: "Validate and reload Nginx remotely after syncing changes.",
                            example: "ssh deploy@example.com \"sudo nginx -t && sudo systemctl reload nginx\"",
                            tags: ["nginx", "sync", "ssh", "reload"],
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
        {
            id: "linux-ubuntu",
            title: "Linux / Ubuntu",
            summary: "Useful Linux and Ubuntu commands for navigation, file search, text search, permissions, and system checks.",
            icon: "terminal-square",
            iconColor: "text-sky-500",
            groups: [
                {
                    title: "Navigation and Listing",
                    commands: [
                        {
                            command: "pwd",
                            description: "Show the current working directory.",
                            example: "pwd",
                            tags: ["linux", "ubuntu", "path", "directory"],
                        },
                        {
                            command: "ls -lah --color=auto",
                            description: "List files with details, hidden files, and color output.",
                            example: "ls -lah --color=auto",
                            tags: ["linux", "ubuntu", "ls", "color"],
                        },
                        {
                            command: "tree -C -L 2",
                            description: "Show a colored folder tree up to 2 levels deep.",
                            example: "tree -C -L 2 /var/www",
                            tags: ["linux", "ubuntu", "tree", "color"],
                        },
                        {
                            command: "cd /path/to/folder",
                            description: "Move into a specific directory.",
                            example: "cd /etc/nginx/sites-available",
                            tags: ["linux", "ubuntu", "cd", "directory"],
                        },
                    ],
                },
                {
                    title: "Find File in Specific Folder",
                    commands: [
                        {
                            command: "find /path/to/folder -name \"filename\"",
                            description: "Find a file by exact name inside a specific folder.",
                            example: "find /etc/nginx -name \"example.com\"",
                            tags: ["linux", "ubuntu", "find", "file"],
                        },
                        {
                            command: "find /path/to/folder -iname \"*keyword*\"",
                            description: "Find files by partial name, case-insensitive, in a specific folder.",
                            example: "find /var/www -iname \"*index*\"",
                            tags: ["linux", "ubuntu", "find", "filename"],
                        },
                        {
                            command: "find /path/to/folder -type f",
                            description: "List only files in a specific folder tree.",
                            example: "find /etc/nginx -type f",
                            tags: ["linux", "ubuntu", "find", "files"],
                        },
                        {
                            command: "find /path/to/folder -type d",
                            description: "List only directories in a specific folder tree.",
                            example: "find /var/www -type d",
                            tags: ["linux", "ubuntu", "find", "directories"],
                        },
                    ],
                },
                {
                    title: "Find Text in Specific Folder",
                    commands: [
                        {
                            command: "grep -R \"text\" /path/to/folder",
                            description: "Search for text recursively in all files under a folder.",
                            example: "grep -R \"server_name\" /etc/nginx",
                            tags: ["linux", "ubuntu", "grep", "text"],
                        },
                        {
                            command: "grep -Rni \"text\" /path/to/folder",
                            description: "Search text recursively with line numbers and case-insensitive matching.",
                            example: "grep -Rni \"listen 80\" /etc/nginx",
                            tags: ["linux", "ubuntu", "grep", "line-number"],
                        },
                        {
                            command: "rg \"text\" /path/to/folder",
                            description: "Use ripgrep for faster text search inside a folder.",
                            example: "rg \"proxy_pass\" /etc/nginx",
                            tags: ["linux", "ubuntu", "rg", "ripgrep"],
                        },
                        {
                            command: "rg --files /path/to/folder",
                            description: "List all files under a folder using ripgrep.",
                            example: "rg --files /etc/nginx",
                            tags: ["linux", "ubuntu", "rg", "files"],
                        },
                    ],
                },
                {
                    title: "File Operations",
                    commands: [
                        {
                            command: "cp source.txt /target/folder/",
                            description: "Copy a file to another folder.",
                            example: "cp index.html /var/www/example.com/html/",
                            tags: ["linux", "ubuntu", "cp", "copy"],
                        },
                        {
                            command: "mv oldname.txt newname.txt",
                            description: "Rename or move a file.",
                            example: "mv default example.com",
                            tags: ["linux", "ubuntu", "mv", "rename"],
                        },
                        {
                            command: "rm file.txt",
                            description: "Remove a file.",
                            example: "rm old.conf",
                            tags: ["linux", "ubuntu", "rm", "delete"],
                        },
                        {
                            command: "mkdir -p /path/to/folder",
                            description: "Create a directory and any missing parent directories.",
                            example: "mkdir -p /var/www/example.com/html",
                            tags: ["linux", "ubuntu", "mkdir", "directory"],
                        },
                    ],
                },
                {
                    title: "Permissions and Ownership",
                    commands: [
                        {
                            command: "chmod 644 file.txt",
                            description: "Set file permissions to readable by others and writable by owner.",
                            example: "chmod 644 /etc/nginx/sites-available/example.com",
                            tags: ["linux", "ubuntu", "chmod", "permissions"],
                        },
                        {
                            command: "chmod +x script.sh",
                            description: "Make a script executable.",
                            example: "chmod +x deploy.sh",
                            tags: ["linux", "ubuntu", "chmod", "execute"],
                        },
                        {
                            command: "chown user:user file.txt",
                            description: "Change file owner and group.",
                            example: "sudo chown www-data:www-data /var/www/example.com/html -R",
                            tags: ["linux", "ubuntu", "chown", "owner"],
                        },
                    ],
                },
                {
                    title: "System and Process",
                    commands: [
                        {
                            command: "ps aux | grep nginx",
                            description: "Find a running process by name.",
                            example: "ps aux | grep nginx",
                            tags: ["linux", "ubuntu", "process", "ps"],
                        },
                        {
                            command: "sudo ss -tulpn",
                            description: "Show listening ports and the processes using them.",
                            example: "sudo ss -tulpn",
                            tags: ["linux", "ubuntu", "ports", "network"],
                        },
                        {
                            command: "df -h",
                            description: "Show disk usage in a human-readable format.",
                            example: "df -h",
                            tags: ["linux", "ubuntu", "disk", "storage"],
                        },
                        {
                            command: "free -h",
                            description: "Show memory usage in a human-readable format.",
                            example: "free -h",
                            tags: ["linux", "ubuntu", "memory", "ram"],
                        },
                    ],
                },
            ],
        },
        {
            id: "ssh",
            title: "SSH",
            summary: "Useful SSH commands for remote access, key setup, file copy, and remote execution.",
            icon: "key-round",
            iconColor: "text-violet-500",
            groups: [
                {
                    title: "Connect",
                    commands: [
                        {
                            command: "ssh user@server",
                            description: "Connect to a remote server over SSH.",
                            example: "ssh deploy@example.com",
                            tags: ["ssh", "remote", "login"],
                        },
                        {
                            command: "ssh -p 2222 user@server",
                            description: "Connect to a remote server on a custom SSH port.",
                            example: "ssh -p 2222 deploy@example.com",
                            tags: ["ssh", "port", "remote"],
                        },
                        {
                            command: "ssh user@server \"pwd && ls\"",
                            description: "Run a command on a remote server without opening an interactive shell.",
                            example: "ssh deploy@example.com \"sudo nginx -t\"",
                            tags: ["ssh", "remote", "command"],
                        },
                    ],
                },
                {
                    title: "Keys",
                    commands: [
                        {
                            command: "ssh-keygen -t ed25519 -C \"you@example.com\"",
                            description: "Generate a modern SSH key pair.",
                            example: "ssh-keygen -t ed25519 -C \"dev@example.com\"",
                            tags: ["ssh", "keygen", "keys"],
                        },
                        {
                            command: "ssh-copy-id user@server",
                            description: "Copy your public key to a server for passwordless login.",
                            example: "ssh-copy-id deploy@example.com",
                            tags: ["ssh", "keys", "copy"],
                        },
                        {
                            command: "cat ~/.ssh/id_ed25519.pub",
                            description: "Show your public SSH key so you can add it to GitHub or a server.",
                            example: "cat ~/.ssh/id_ed25519.pub",
                            tags: ["ssh", "keys", "public-key"],
                        },
                    ],
                },
                {
                    title: "Copy Files",
                    commands: [
                        {
                            command: "scp file.txt user@server:/path/",
                            description: "Copy a local file to a remote server.",
                            example: "scp deploy.sh deploy@example.com:/home/deploy/",
                            tags: ["ssh", "scp", "copy"],
                        },
                        {
                            command: "scp -r folder/ user@server:/path/",
                            description: "Copy a local folder recursively to a remote server.",
                            example: "scp -r ./dist deploy@example.com:/var/www/example.com/",
                            tags: ["ssh", "scp", "folder"],
                        },
                        {
                            command: "rsync -avz ./folder/ user@server:/path/",
                            description: "Sync a local folder efficiently to a remote server.",
                            example: "rsync -avz ./build/ deploy@example.com:/var/www/example.com/",
                            tags: ["ssh", "rsync", "sync"],
                        },
                    ],
                },
            ],
        },
        {
            id: "systemctl",
            title: "systemctl",
            summary: "Service management commands for starting, stopping, reloading, enabling, and checking services.",
            icon: "settings-2",
            iconColor: "text-zinc-500",
            groups: [
                {
                    title: "Manage Services",
                    commands: [
                        {
                            command: "sudo systemctl start nginx",
                            description: "Start a service immediately.",
                            example: "sudo systemctl start nginx",
                            tags: ["systemctl", "start", "service"],
                        },
                        {
                            command: "sudo systemctl stop nginx",
                            description: "Stop a running service.",
                            example: "sudo systemctl stop nginx",
                            tags: ["systemctl", "stop", "service"],
                        },
                        {
                            command: "sudo systemctl restart nginx",
                            description: "Restart a service.",
                            example: "sudo systemctl restart nginx",
                            tags: ["systemctl", "restart", "service"],
                        },
                        {
                            command: "sudo systemctl reload nginx",
                            description: "Reload a service configuration without full restart when supported.",
                            example: "sudo systemctl reload nginx",
                            tags: ["systemctl", "reload", "service"],
                        },
                    ],
                },
                {
                    title: "Status and Boot",
                    commands: [
                        {
                            command: "sudo systemctl status nginx",
                            description: "Check the current status of a service.",
                            example: "sudo systemctl status nginx",
                            tags: ["systemctl", "status", "service"],
                        },
                        {
                            command: "sudo systemctl enable nginx",
                            description: "Enable a service to start automatically at boot.",
                            example: "sudo systemctl enable nginx",
                            tags: ["systemctl", "enable", "boot"],
                        },
                        {
                            command: "sudo systemctl disable nginx",
                            description: "Disable automatic startup for a service.",
                            example: "sudo systemctl disable nginx",
                            tags: ["systemctl", "disable", "boot"],
                        },
                        {
                            command: "systemctl list-units --type=service",
                            description: "List loaded service units.",
                            example: "systemctl list-units --type=service",
                            tags: ["systemctl", "list", "services"],
                        },
                    ],
                },
            ],
        },
        {
            id: "journalctl",
            title: "journalctl",
            summary: "Useful journalctl commands for checking service logs, filtering output, and following logs live.",
            icon: "scroll-text",
            iconColor: "text-amber-500",
            groups: [
                {
                    title: "Service Logs",
                    commands: [
                        {
                            command: "sudo journalctl -u nginx.service",
                            description: "Show logs for a specific service unit.",
                            example: "sudo journalctl -u nginx.service",
                            tags: ["journalctl", "logs", "service"],
                        },
                        {
                            command: "sudo journalctl -xeu nginx.service",
                            description: "Show detailed recent logs and errors for a service.",
                            example: "sudo journalctl -xeu nginx.service",
                            tags: ["journalctl", "errors", "service"],
                        },
                        {
                            command: "sudo journalctl -fu nginx.service",
                            description: "Follow service logs in real time.",
                            example: "sudo journalctl -fu nginx.service",
                            tags: ["journalctl", "follow", "service"],
                        },
                    ],
                },
                {
                    title: "Time Filters",
                    commands: [
                        {
                            command: "sudo journalctl --since today",
                            description: "Show logs since the start of today.",
                            example: "sudo journalctl --since today",
                            tags: ["journalctl", "today", "time"],
                        },
                        {
                            command: "sudo journalctl --since \"1 hour ago\"",
                            description: "Show logs from the last hour.",
                            example: "sudo journalctl --since \"1 hour ago\"",
                            tags: ["journalctl", "time", "recent"],
                        },
                        {
                            command: "sudo journalctl -p err -b",
                            description: "Show boot logs filtered to error priority only.",
                            example: "sudo journalctl -p err -b",
                            tags: ["journalctl", "boot", "errors"],
                        },
                    ],
                },
            ],
        },
        {
            id: "curl",
            title: "curl / wget",
            summary: "Useful commands for downloading files, testing APIs, sending JSON, and inspecting HTTP responses.",
            icon: "globe",
            iconColor: "text-cyan-600",
            groups: [
                {
                    title: "Download Files",
                    commands: [
                        {
                            command: "curl -O https://example.com/file.zip",
                            description: "Download a file and keep its original name.",
                            example: "curl -O https://example.com/file.zip",
                            tags: ["curl", "download", "file"],
                        },
                        {
                            command: "wget https://example.com/file.zip",
                            description: "Download a file using wget.",
                            example: "wget https://example.com/file.zip",
                            tags: ["wget", "download", "file"],
                        },
                        {
                            command: "curl -L -o app.tar.gz https://example.com/archive.tar.gz",
                            description: "Follow redirects and save a file with a custom name.",
                            example: "curl -L -o app.tar.gz https://example.com/archive.tar.gz",
                            tags: ["curl", "redirect", "download"],
                        },
                    ],
                },
                {
                    title: "Test APIs",
                    commands: [
                        {
                            command: "curl https://api.example.com/users",
                            description: "Send a simple GET request to an API endpoint.",
                            example: "curl https://api.example.com/users",
                            tags: ["curl", "api", "get"],
                        },
                        {
                            command: "curl -I https://example.com",
                            description: "Fetch only the HTTP response headers.",
                            example: "curl -I https://example.com",
                            tags: ["curl", "headers", "http"],
                        },
                        {
                            command: "curl -X POST https://api.example.com/users -H \"Content-Type: application/json\" -d '{\"name\":\"John\"}'",
                            description: "Send JSON data in a POST request.",
                            example: "curl -X POST https://api.example.com/users -H \"Content-Type: application/json\" -d '{\"name\":\"John\"}'",
                            tags: ["curl", "api", "post", "json"],
                        },
                    ],
                },
            ],
        },
        {
            id: "certbot-ssl",
            title: "Certbot / SSL",
            summary: "Commands for installing Certbot, issuing HTTPS certificates, and renewing SSL for Nginx sites.",
            icon: "shield-check",
            iconColor: "text-green-600",
            groups: [
                {
                    title: "Install and Issue",
                    commands: [
                        {
                            command: "sudo apt install certbot python3-certbot-nginx -y",
                            description: "Install Certbot and the Nginx plugin on Ubuntu or Debian.",
                            example: "sudo apt install certbot python3-certbot-nginx -y",
                            tags: ["certbot", "ssl", "install", "nginx"],
                        },
                        {
                            command: "sudo certbot --nginx -d example.com -d www.example.com",
                            description: "Request and configure an HTTPS certificate for an Nginx site.",
                            example: "sudo certbot --nginx -d example.com -d www.example.com",
                            tags: ["certbot", "ssl", "https", "nginx"],
                        },
                        {
                            command: "sudo certbot certificates",
                            description: "List installed certificates and their expiration details.",
                            example: "sudo certbot certificates",
                            tags: ["certbot", "certificates", "ssl"],
                        },
                    ],
                },
                {
                    title: "Renew and Test",
                    commands: [
                        {
                            command: "sudo certbot renew --dry-run",
                            description: "Test certificate renewal without making real changes.",
                            example: "sudo certbot renew --dry-run",
                            tags: ["certbot", "renew", "test"],
                        },
                        {
                            command: "sudo certbot renew",
                            description: "Renew certificates that are close to expiring.",
                            example: "sudo certbot renew",
                            tags: ["certbot", "renew", "ssl"],
                        },
                        {
                            command: "sudo nginx -t && sudo systemctl reload nginx",
                            description: "Validate and reload Nginx after SSL configuration changes.",
                            example: "sudo nginx -t && sudo systemctl reload nginx",
                            tags: ["certbot", "nginx", "reload"],
                        },
                    ],
                },
            ],
        },
        {
            id: "pm2",
            title: "PM2",
            summary: "Commands for running Node.js applications in the background, managing processes, and checking logs.",
            icon: "activity",
            iconColor: "text-fuchsia-500",
            groups: [
                {
                    title: "Run Apps",
                    commands: [
                        {
                            command: "pm2 start app.js --name my-app",
                            description: "Start a Node.js app in PM2 with a process name.",
                            example: "pm2 start server.js --name my-app",
                            tags: ["pm2", "start", "node"],
                        },
                        {
                            command: "pm2 start npm --name my-app -- run start",
                            description: "Start an npm script through PM2.",
                            example: "pm2 start npm --name my-app -- run start",
                            tags: ["pm2", "npm", "start"],
                        },
                        {
                            command: "pm2 start ecosystem.config.js",
                            description: "Start an app using a PM2 ecosystem config file.",
                            example: "pm2 start ecosystem.config.js",
                            tags: ["pm2", "ecosystem", "config"],
                        },
                        {
                            command: "module.exports = { ... }",
                            description: "Example PM2 ecosystem.config.js for a Node.js application with separate production and development environments.",
                            exampleBlock: `module.exports = {
    apps: [
        {
            name: "my-app",
            script: "./server.js",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "300M",
            env: {
                NODE_ENV: "development",
                PORT: 3000
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};`,
                            copyText: `module.exports = {
    apps: [
        {
            name: "my-app",
            script: "./server.js",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "300M",
            env: {
                NODE_ENV: "development",
                PORT: 3000
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};`,
                            tags: ["pm2", "ecosystem", "config", "example"],
                        },
                        {
                            command: "module.exports = { cluster mode }",
                            description: "Example PM2 ecosystem.config.js using cluster mode for multi-core production workloads.",
                            exampleBlock: `module.exports = {
    apps: [
        {
            name: "my-app-cluster",
            script: "./server.js",
            exec_mode: "cluster",
            instances: "max",
            autorestart: true,
            watch: false,
            max_memory_restart: "500M",
            env_production: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};`,
                            copyText: `module.exports = {
    apps: [
        {
            name: "my-app-cluster",
            script: "./server.js",
            exec_mode: "cluster",
            instances: "max",
            autorestart: true,
            watch: false,
            max_memory_restart: "500M",
            env_production: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};`,
                            tags: ["pm2", "cluster", "config", "example"],
                        },
                        {
                            command: "module.exports = { Next.js }",
                            description: "Example PM2 ecosystem.config.js for a Next.js production server.",
                            exampleBlock: `module.exports = {
    apps: [
        {
            name: "next-app",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3000",
            cwd: "/var/www/next-app",
            instances: 1,
            autorestart: true,
            watch: false,
            env_production: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};`,
                            copyText: `module.exports = {
    apps: [
        {
            name: "next-app",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3000",
            cwd: "/var/www/next-app",
            instances: 1,
            autorestart: true,
            watch: false,
            env_production: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};`,
                            tags: ["pm2", "nextjs", "config", "example"],
                        },
                        {
                            command: "module.exports = { NestJS }",
                            description: "Example PM2 ecosystem.config.js for a NestJS app running the compiled dist entrypoint.",
                            exampleBlock: `module.exports = {
    apps: [
        {
            name: "nestjs-app",
            script: "dist/main.js",
            cwd: "/var/www/nestjs-app",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "400M",
            env_production: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};`,
                            copyText: `module.exports = {
    apps: [
        {
            name: "nestjs-app",
            script: "dist/main.js",
            cwd: "/var/www/nestjs-app",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "400M",
            env_production: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};`,
                            tags: ["pm2", "nestjs", "config", "example"],
                        },
                    ],
                },
                {
                    title: "Manage Processes",
                    commands: [
                        {
                            command: "pm2 list",
                            description: "Show all PM2 managed processes.",
                            example: "pm2 list",
                            tags: ["pm2", "list", "processes"],
                        },
                        {
                            command: "pm2 restart my-app",
                            description: "Restart a PM2 process by name.",
                            example: "pm2 restart my-app",
                            tags: ["pm2", "restart", "process"],
                        },
                        {
                            command: "pm2 stop my-app",
                            description: "Stop a PM2 process without deleting it.",
                            example: "pm2 stop my-app",
                            tags: ["pm2", "stop", "process"],
                        },
                        {
                            command: "pm2 delete my-app",
                            description: "Remove a process from PM2.",
                            example: "pm2 delete my-app",
                            tags: ["pm2", "delete", "process"],
                        },
                    ],
                },
                {
                    title: "Logs and Startup",
                    commands: [
                        {
                            command: "pm2 logs my-app",
                            description: "View live logs for a PM2 process.",
                            example: "pm2 logs my-app",
                            tags: ["pm2", "logs", "process"],
                        },
                        {
                            command: "pm2 save",
                            description: "Save the current PM2 process list for resurrection on reboot.",
                            example: "pm2 save",
                            tags: ["pm2", "save", "startup"],
                        },
                        {
                            command: "pm2 startup",
                            description: "Generate and configure startup scripts for PM2.",
                            example: "pm2 startup",
                            tags: ["pm2", "startup", "boot"],
                        },
                    ],
                },
            ],
        },
    ],
};
