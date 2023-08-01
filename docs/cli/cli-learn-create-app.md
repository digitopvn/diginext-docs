---
sidebar_position: 3
---

# Create or initialize app

- Create new project & app:
    
    ```bash
    dx new
    ```
    
- **[!!! DANGER !!!]** Forcefully create new project **(overwriting current directory & git repo if any)**:
    
    ```bash
    dx new --overwrite
    
    # short term:
    dx new -o
    ```
    
- Initialize a framework in the current app directory:
    
    ```bash
    cd /path/to/source/code
    dx init
    ```