import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function Dashboard() {
    const navigate = useNavigate(); // Call useNavigate to get the navigate function

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/login");
    });

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => signOut(firebaseAuth)}>Sign out</button>
        </div>
    );
}

export default Dashboard;
