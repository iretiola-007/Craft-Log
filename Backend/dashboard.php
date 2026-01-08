<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

require 'config.php';

// handle new entry submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $user_id = $_SESSION['USER_ID'];
    $project = $_POST['project'];
    $whatIDid = $_POST['what_i_did'];
    $whatILearned = $_POST['what_i_learned'];
    $nextSteps = $_POST['next_steps'];
    $mood = $_POST['mood'];

    $stmt = pdo->prepare("INSERT INTO entries (user_id, project)")
}
?>