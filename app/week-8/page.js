"use client";

//importing from auth-context
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut}>Logout  </button>
          <a href="/week-8/shopping-list">  Go to Shopping List  </a>
        </>
      ) : (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      )}
    </main>
  );
};

export default LandingPage;


