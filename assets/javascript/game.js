// Logic for easy level
function startEasyLevel() {
    // Code for easy level
}

// Logic for medium level
function startMediumLevel() {
    // Code for medium level
}

// Logic for hard level
function startHardLevel() {
    // Code for hard level
}

// Call appropriate level based on user selection or default
function startGame(level) {
    if (level === 'easy') {
        startEasyLevel();
    } else if (level === 'medium') {
        startMediumLevel();
    } else if (level === 'hard') {
        startHardLevel();
    } else {
        // Default to easy level if no level is specified
        startEasyLevel();
    }
}

