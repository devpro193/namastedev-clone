import Hero from "@/components/new-cohort/hero";
import type { Metadata } from "next";
import Testimonials from "@/components/mentorship-comp/testimonials";
import Companies from "@/components/new-cohort/companies";
import Course from "@/components/new-cohort/course";
import NewMentor from "@/components/new-cohort/new-mentor";
import Highlights from "@/components/new-cohort/highligths";
import Faqs from "@/components/mentorship-comp/faq";

let course = [
  {
    title: "Introduction to DSA, Patterns, Questions",
    topics: [
      "Welcome to our course. DM me for any help!",
      "Revision focused course for all learners",
      "How to solve DSA problems",
    ],
  },
  {
    title: "Important guides,links, questions, resources",
    topics: [
      "Complete Revision DSA video (1.5 hrs)",
      "DSA revision complete guide (pdf) (98 pages)",
      "150-DSA-questions (9 pages)",
      "Recursion and Backtracking guide (pdf) (15 pages)",
      "Dynamic programming guide (pdf) (10 pages)",
      "Graphs guide (pdf) (17 pages)",
      "Tree traversals guide (pdf) (14 pages)",
      "Complete tech job guide (26 pages)",
      "Facebook generic interview question list",
      "DSA revision slides and sheets",
    ],
  },
  {
    title: "Time complexity, Big-O notation",
    topics: [
      "Big O Introduction",
      "Big-O Space Complexity",
      "Big O of Array and Objects",
      "Big-O Exercises Time Complexity",
    ],
  },
  {
    title: "Arrays, Hashmaps - Introduction and Questions",
    topics: [
      "Arrays(insertion , deletion , traversing)",
      "Big O of Array and Objects",
      "Arrays Questions",
      "Arrays - Longest String",
      "Array - find Zero Triplets",
      "Arrays - Find Max Min",
      "Arrays - Remove Given Element",
      "Hashtable questions",
      "Hash Table - Two Sum",
      "Hash Table - Find Duplicates",
      "Hash Table - Item In Common",
    ],
  },
  {
    title: "Arrays, Pointers, Sliding window revision",
    topics: [
      "Quick revision - Arrays",
      "Two Pointers - Introduction",
      "Slow and fast pointer - Introduction",
      "Two pointer and Sliding window revision",
      "Arrays and Hashmaps generic revision sheet",
    ],
  },
  {
    title: "Binary search",
    topics: [
      "Binary search introduction",
      "Binary search quick revision and resources",
      "Binary search revision sheet and template",
    ],
  },
  {
    title: "Linked lists",
    topics: [
      "Singly Linked Lists Complete video",
      "Doubly Linked Lists Complete video",
      "Linked lists questions",
      "Linked list revision guide (pdf) (10 pages)",
      "Linked list quick revision (video)",
      "Linked lists generic revision sheet",
      "Linked list questions - solutions",
      "Singly Linked Lists - Reverse",
      "Singly Linked Lists - Remove Duplicate",
      "Singly Linked Lists - Remove Duplicate Unsorted Array",
      "Singly Linked Lists - Find Middle",
      "Singly Linked Lists - Detect Cycle Start",
      "Doubly Linked Lists - Detect Cycle",
      "Doubly Linked Lists - Reverse a List",
      "Doubly Linked Lists - Swap First and Last",
    ],
  },
  {
    title: "Recursion, Backtracking",
    topics: [
      "Recursion - Introduction",
      "Recursion + Call Stack - Deep understanding",
      "Recursion, Backtracking intro (live class)",
      "Backtracking revision video",
      "Recursion and Backtracking (pdf guide) (15 pages)",
      "Recursion and backtracking generic revision sheet",
      "Backtracking questions sheet",
      "Backtracking questions",
      "Backtracking - subsets",
      "Backtracking - subsets 2",
      "Backtracking - permutations",
      "Backtracking - combination sum",
    ],
  },
  {
    title: "Dynamic programming",
    topics: [
      "Recursion and Backtracking generic revision sheet",
      "Dynamic Programming generic revision sheet",
      "Dynamic programming revision (video)",
      "DP questions list",
      "Dynamic programming complete guide (10 pages)",
    ],
  },
  {
    title: "Stacks, Queues",
    topics: [
      "Stacks revision sheet",
      "Queues revision sheet",
      "Stack - Introduction",
      "Stack - Constructor",
      "Stack - Push",
      "Stack - Pop",
      "Queue - Introduction",
      "Queue - Enqueue",
      "Queue - Dequeue",
      "Stacks questions",
      "Stack _ Reverse String",
      "Stack _ Balanced",
      "Stacks _ Sort Stack",
    ],
  },
  {
    title: "Graphs - Introduction",
    topics: [
      "Graphs - Introduction",
      "Adjacency List - Introduction",
      "Adjacency Matrix - Introduction",
      "Adjacency List - Add Edge",
      "Adjacency List - Remove Edge",
      "Adjacency List - Add Vertex",
      "Adjacency List - Remove Vertex",
    ],
  },
  {
    title: "Graphs - algorithms and questions",
    topics: [
      "Graphs questions list",
      "Graphs generic revision sheet",
      "Graphs complete (17 pages)",
      "Graphs revision part 1 (video)",
    ],
  },
  {
    title: "Trees - Binary, BST, BFS, DFS",
    topics: [
      "Tree Traversal Guide - BFS and DFS",
      "Binary Search Tree Full Video",
      "Breadth First Search - detailed video",
      "Depth First Search - detailed video",
      "Trees generic revision sheet",
      "Complete question list - trees",
      "Trees orders - in, post, pre (pdf guide) (14 pages)",
    ],
  },
  {
    title: "Tries, Priority Queue",
    topics: [
      "Tries revision (video)",
      "Priority queue revision (video)",
      "Trie visualization",
      "Questions - heaps",
      "Article - tries",
    ],
  },
  {
    title: "Sorting",
    topics: [
      "Merge Sort",
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Quick Sort",
      "Sorting summary",
    ],
  },
  {
    title: "Revising DSA using Chat GPT",
    topics: [
      "Introduction to Chat GPT prompts",
      "Prompt for explaining code",
      "Prompt for similar DSA questions",
      "Prompt for new DSA questions",
      "Prompt for multiple solutions for DSA question",
    ],
  },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://namastedev-clone.vercel.app"),
  title: "Learn DSA and Get Ready for Placement",
  description:
    "A live dsa placement ready course from 30 days coding. Checkout on www.courses.30dayscoding.com",
  openGraph: {
    images: "/dsa.jpg",
  },
};

export default function Home() {
  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title="Learn DSA and Get Ready for Placement"
        desc="Learn from Aryan, Abhinav, Deepanshu, and the 30DC team to get placed this season."
        subTitle="Solve, Save, and Revise DSA"
        subDesc="Master dsa through practicing algorithms under expert's guidance from industry professionals. A placement driven course."
        ytId="tJkZA9JoZCw"
        heroImage="https://i.ibb.co/q5k6zZz/dsa.jpg"
        // heroImage="https://i.ibb.co/SdZJSMh/algo.gif"
      />
      <Course course={course} />
      <NewMentor />
      <Companies />
      <Highlights />
      <Testimonials />
      <Faqs />
    </main>
  );
}
