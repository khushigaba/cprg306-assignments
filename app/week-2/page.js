import Link from 'next/link';
import StudentInfo from "./student-info.js";
export default function Page() {
    return (
      <main>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <h2>Shopping List</h2>
        {StudentInfo()}
      </main>
    );
  }

  
  