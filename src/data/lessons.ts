export interface Lesson {
  id: string;
  course: string;
  title: string;
  videoId: string;
  content: string;
  code: string;
  language: string;
  notes: string[];
  prev: string | null;
  next: string | null;
}

export const LESSONS: Record<string, Lesson> = {
  /* ── JAVA ────────────────────────────────────────── */
  'java-intro': {
    id: 'java-intro',
    course: 'java',
    title: 'Introduction to Java',
    videoId: 'eIrMbAQSU34',
    content: `## What is Java?

Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was originally developed by James Gosling at Sun Microsystems (now Oracle) and released in 1995.

Java follows the **Write Once, Run Anywhere (WORA)** principle — compiled Java bytecode runs on any platform that has a JVM installed, without recompilation.

## Why Learn Java?

- **Platform Independence** — Runs on any OS via the JVM
- **Object-Oriented** — Promotes clean, modular, reusable code
- **Strongly Typed** — Catches errors at compile time
- **Massive Ecosystem** — Spring, Hibernate, Maven, Gradle and thousands of libraries
- **Enterprise Ready** — Powers banks, e-commerce, Android, and more

## JDK vs JRE vs JVM

- **JVM (Java Virtual Machine)** — Executes Java bytecode
- **JRE (Java Runtime Environment)** — JVM + core libraries
- **JDK (Java Development Kit)** — JRE + compiler + developer tools`,
    code: `// HelloWorld.java
public class HelloWorld {

    // main() is the entry point of every Java program
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Java version: " + System.getProperty("java.version"));

        // String formatting
        String name = "Learner";
        System.out.printf("Welcome, %s! Let's learn Java.%n", name);
    }
}`,
    language: 'java',
    notes: [
      'Every Java program starts execution from the main() method',
      'Java is case-sensitive — String ≠ string',
      'Each public class must be in a file matching its name (e.g., HelloWorld.java)',
      'System.out.println() adds a newline; System.out.print() does not',
    ],
    prev: null,
    next: 'java-variables',
  },

  'java-variables': {
    id: 'java-variables',
    course: 'java',
    title: 'Variables & Data Types',
    videoId: 'xk4_1vDrzzo',
    content: `## Variables in Java

A variable is a named memory location that stores a value. Java is **statically typed**, meaning every variable must have a declared type before use.

## Primitive Data Types

Java has 8 built-in primitive types:

| Type    | Size    | Default | Example          |
|---------|---------|---------|-----------------|
| byte    | 1 byte  | 0       | byte b = 100;   |
| short   | 2 bytes | 0       | short s = 3000; |
| int     | 4 bytes | 0       | int i = 42;     |
| long    | 8 bytes | 0L      | long l = 99L;   |
| float   | 4 bytes | 0.0f    | float f = 3.14f;|
| double  | 8 bytes | 0.0d    | double d = 3.14;|
| boolean | 1 bit   | false   | boolean b = true;|
| char    | 2 bytes | '\\u0000'| char c = 'A';   |

## Reference Types

Reference types include **String**, Arrays, Classes, and Interfaces. They store a reference (address) to the object, not the value itself.

## Type Inference with var (Java 10+)

Java 10 introduced the \`var\` keyword for local variable type inference, letting the compiler infer the type automatically.`,
    code: `public class Variables {

    // Instance variable (belongs to the object)
    private String name = "JavaDocs";

    // Static variable (belongs to the class)
    static int instanceCount = 0;

    public static void main(String[] args) {

        // Primitive variable declarations
        int age        = 25;
        long bigNumber = 9_999_999_999L;   // underscores for readability
        double salary  = 75_000.50;
        float pi       = 3.14f;
        boolean active = true;
        char grade     = 'A';

        // Reference type
        String message = "Hello, Java!";

        // var — type inferred at compile time (Java 10+)
        var city    = "Bangalore";          // inferred as String
        var version = 21;                   // inferred as int

        System.out.println(age + " | " + bigNumber + " | " + salary);
        System.out.println(active + " | " + grade + " | " + message);
        System.out.println("City: " + city + ", Version: " + version);

        // Constants (by convention, ALL_CAPS)
        final double TAX_RATE = 0.18;
        System.out.println("Tax rate: " + TAX_RATE);
    }
}`,
    language: 'java',
    notes: [
      'Use final to declare constants; name them in UPPER_SNAKE_CASE',
      'long literals need an L suffix: 99L',
      'float literals need an f suffix: 3.14f',
      'var works only for local variables, not fields or method parameters',
    ],
    prev: 'java-intro',
    next: 'java-loops',
  },

  'java-loops': {
    id: 'java-loops',
    course: 'java',
    title: 'Loops in Java',
    videoId: 'P-pID6OshH4',
    content: `## Control Flow: Loops

Loops allow you to execute a block of code repeatedly based on a condition.

## Types of Loops

- **for** — when you know the number of iterations upfront
- **while** — when the condition is evaluated before each iteration
- **do-while** — guaranteed to run at least once
- **enhanced for-each** — clean iteration over arrays and collections

## Loop Control

| Statement  | Effect                              |
|-----------|--------------------------------------|
| break     | Exit the loop immediately            |
| continue  | Skip current iteration               |
| return    | Exit the entire method               |`,
    code: `public class Loops {
    public static void main(String[] args) {

        // ── for loop ──────────────────────────────
        System.out.println("--- Multiplication Table (for) ---");
        for (int i = 1; i <= 5; i++) {
            System.out.printf("5 x %d = %d%n", i, 5 * i);
        }

        // ── while loop ────────────────────────────
        System.out.println("--- Countdown (while) ---");
        int count = 5;
        while (count > 0) {
            System.out.println(count + "...");
            count--;
        }
        System.out.println("Blast off!");

        // ── do-while loop ─────────────────────────
        System.out.println("--- do-while (runs at least once) ---");
        int x = 10;
        do {
            System.out.println("x = " + x);
            x--;
        } while (x > 8);

        // ── enhanced for-each loop ────────────────
        System.out.println("--- for-each ---");
        String[] langs = {"Java", "Kotlin", "Scala", "Groovy"};
        for (String lang : langs) {
            System.out.println("Language: " + lang);
        }

        // ── break and continue ────────────────────
        System.out.println("--- break / continue ---");
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) continue; // skip even numbers
            if (i == 7)      break;   // stop before 7
            System.out.print(i + " ");
        }
        System.out.println();

        // ── nested loop (pattern) ─────────────────
        for (int row = 1; row <= 4; row++) {
            for (int col = 1; col <= row; col++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
    language: 'java',
    notes: [
      'Avoid modifying the loop variable inside the body — it reduces readability',
      'for-each loops cannot modify the source array directly',
      'Nested loops have O(n²) complexity — use them carefully',
      'Label outer loops (outerLoop:) to break/continue from inner loops',
    ],
    prev: 'java-variables',
    next: 'java-arrays',
  },

  'java-arrays': {
    id: 'java-arrays',
    course: 'java',
    title: 'Arrays in Java',
    videoId: 'L06uGnF4IpY',
    content: `## Arrays

An array is a fixed-size, ordered collection of elements of the **same type**. Arrays are zero-indexed and stored in contiguous memory.

## Key Characteristics

- Fixed length (set at creation time)
- Zero-indexed: first element is \`arr[0]\`
- Can store primitives or object references
- Length accessible via \`arr.length\`

## Multidimensional Arrays

Java supports 2D and higher-dimensional arrays, stored as arrays-of-arrays.`,
    code: `import java.util.Arrays;

public class ArraysDemo {
    public static void main(String[] args) {

        // ── 1D Array declaration & initialisation ──
        int[] scores = new int[5];          // all zeros by default
        scores[0] = 95; scores[1] = 87; scores[2] = 92;
        scores[3] = 78; scores[4] = 88;

        // Shorthand initialisation
        String[] fruits = {"Apple", "Mango", "Banana", "Cherry"};

        // ── Iteration ──────────────────────────────
        int total = 0;
        for (int score : scores) total += score;
        System.out.printf("Average score: %.1f%n", (double) total / scores.length);

        // ── Utility methods (java.util.Arrays) ─────
        System.out.println("Before sort: " + Arrays.toString(scores));
        Arrays.sort(scores);
        System.out.println("After sort:  " + Arrays.toString(scores));

        // Binary search (array must be sorted first)
        int idx = Arrays.binarySearch(scores, 92);
        System.out.println("Found 92 at index: " + idx);

        // Copy
        int[] copy = Arrays.copyOf(scores, 3);       // first 3 elements
        int[] range = Arrays.copyOfRange(scores, 1, 4); // index 1..3

        // Fill
        int[] zeros = new int[5];
        Arrays.fill(zeros, 0);

        // ── 2D Array (matrix) ──────────────────────
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("Matrix[1][2] = " + matrix[1][2]); // 6

        // Iterate 2D
        for (int[] row : matrix) {
            System.out.println(Arrays.toString(row));
        }
    }
}`,
    language: 'java',
    notes: [
      'Arrays.sort() uses dual-pivot quicksort for primitives and mergesort for objects',
      'ArrayIndexOutOfBoundsException thrown when index ≥ length',
      'Use ArrayList instead of arrays when you need a dynamic-size collection',
      'Arrays.toString() gives a readable string representation',
    ],
    prev: 'java-loops',
    next: 'java-methods',
  },

  'java-methods': {
    id: 'java-methods',
    course: 'java',
    title: 'Methods in Java',
    videoId: 'cCgOESMQe44',
    content: `## Methods

A method is a named block of code that performs a specific task and optionally returns a value. Methods promote **code reuse** and **separation of concerns**.

## Anatomy of a Method

\`\`\`
accessModifier returnType methodName(parameterList) {
    // body
    return value; // omit if void
}
\`\`\`

## Method Overloading

Multiple methods with the **same name** but different parameter lists. The compiler selects the right version based on argument types/count.

## Pass by Value

Java is strictly **pass-by-value**. Primitive values are copied; object references are copied (but both point to the same object).`,
    code: `public class Methods {

    // ── Basic method ───────────────────────────────
    public static int add(int a, int b) {
        return a + b;
    }

    // ── Overloaded method (same name, different params)
    public static double add(double a, double b) {
        return a + b;
    }
    public static String add(String a, String b) {
        return a + b;
    }

    // ── Varargs — variable number of arguments ─────
    public static int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) total += n;
        return total;
    }

    // ── Recursive method ───────────────────────────
    public static long factorial(int n) {
        if (n <= 1) return 1;           // base case
        return n * factorial(n - 1);    // recursive call
    }

    // ── Method with early return ───────────────────
    public static String classify(int score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        return "F";
    }

    public static void main(String[] args) {
        System.out.println(add(3, 4));              // 7
        System.out.println(add(2.5, 3.5));          // 6.0
        System.out.println(add("Hello, ", "Java")); // Hello, Java

        System.out.println(sum(1, 2, 3, 4, 5));     // 15
        System.out.println(factorial(10));           // 3628800
        System.out.println(classify(85));            // B
    }
}`,
    language: 'java',
    notes: [
      'static methods belong to the class and can be called without an object',
      'Avoid deep recursion — it can cause StackOverflowError',
      'Overloading is resolved at compile time (static dispatch)',
      'Keep methods short and focused on a single responsibility',
    ],
    prev: 'java-arrays',
    next: 'java-collections',
  },

  'java-collections': {
    id: 'java-collections',
    course: 'java',
    title: 'Collections Framework',
    videoId: 'GdAon80-0KA',
    content: `## Java Collections Framework

The Collections Framework provides a unified architecture for storing and manipulating groups of objects. It lives in \`java.util\`.

## Core Interfaces

| Interface | Description                         | Common Impl.        |
|-----------|-------------------------------------|---------------------|
| List      | Ordered, allows duplicates          | ArrayList, LinkedList|
| Set       | No duplicates                       | HashSet, TreeSet    |
| Map       | Key-value pairs, unique keys        | HashMap, TreeMap    |
| Queue     | FIFO ordering                       | LinkedList, ArrayDeque|
| Deque     | Double-ended queue                  | ArrayDeque          |

## Choosing the Right Collection

- Need **order** + **fast random access** → \`ArrayList\`
- Need **fast insertion/deletion** at ends → \`LinkedList\`
- Need **no duplicates** → \`HashSet\`
- Need **sorted** entries → \`TreeSet / TreeMap\`
- Need **key-value** lookups → \`HashMap\``,
    code: `import java.util.*;
import java.util.stream.*;

public class CollectionsDemo {
    public static void main(String[] args) {

        // ── ArrayList ──────────────────────────────
        List<String> list = new ArrayList<>(List.of("Java", "Spring", "Kotlin"));
        list.add("Scala");
        list.remove("Kotlin");
        System.out.println("List: " + list);                  // [Java, Spring, Scala]
        System.out.println("Size: " + list.size());
        System.out.println("Contains Spring: " + list.contains("Spring"));

        // ── HashMap ────────────────────────────────
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 95);
        scores.put("Bob",   87);
        scores.put("Carol", 92);

        scores.forEach((name, score) ->
            System.out.printf("  %s → %d%n", name, score));

        // getOrDefault — safe get
        int danScore = scores.getOrDefault("Dan", 0);
        System.out.println("Dan's score: " + danScore);

        // ── HashSet ────────────────────────────────
        Set<String> langs = new HashSet<>(Arrays.asList("Java", "Python", "Java", "Go"));
        System.out.println("Set (no duplicates): " + langs);

        // ── Streams (Java 8+) ──────────────────────
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        List<Integer> evenSquares = numbers.stream()
            .filter(n  -> n % 2 == 0)
            .map   (n  -> n * n)
            .collect(Collectors.toList());
        System.out.println("Even squares: " + evenSquares);

        int total = numbers.stream()
            .reduce(0, Integer::sum);
        System.out.println("Sum: " + total);

        // ── Collections utility methods ────────────
        List<Integer> mutable = new ArrayList<>(List.of(5, 2, 8, 1, 9, 3));
        Collections.sort(mutable);
        System.out.println("Sorted: " + mutable);
        System.out.println("Max: " + Collections.max(mutable));
    }
}`,
    language: 'java',
    notes: [
      'Prefer List.of() and Map.of() for immutable collections',
      'HashMap is not thread-safe — use ConcurrentHashMap in multi-threaded code',
      'Streams do not modify the source collection',
      'Use generics (<Type>) to avoid ClassCastException at runtime',
    ],
    prev: 'java-methods',
    next: 'oop-encapsulation',
  },

  /* ── OOP ─────────────────────────────────────────── */
  'oop-encapsulation': {
    id: 'oop-encapsulation',
    course: 'oop',
    title: 'Encapsulation',
    videoId: 'pTB0EiLXUC8',
    content: `## What is Encapsulation?

Encapsulation is the OOP principle of **bundling data (fields) and methods** that operate on that data within a single class, while **restricting direct access** to the internal state.

## How to Implement

1. Declare fields as **private**
2. Provide **public getter** methods to read values
3. Provide **public setter** methods (with validation) to modify values

## Benefits

- Protects object state from invalid modifications
- Implementation can change without affecting external code
- Easier to test and maintain`,
    code: `public class BankAccount {

    // Private fields — hidden from the outside world
    private final String accountNumber;
    private String owner;
    private double balance;

    // Constructor
    public BankAccount(String accountNumber, String owner, double initialBalance) {
        if (initialBalance < 0) throw new IllegalArgumentException("Balance cannot be negative");
        this.accountNumber = accountNumber;
        this.owner         = owner;
        this.balance       = initialBalance;
    }

    // Getter — read-only (no setter for accountNumber — immutable)
    public String getAccountNumber() { return accountNumber; }
    public String getOwner()         { return owner; }

    // Getter for balance
    public double getBalance()       { return balance; }

    // Controlled deposit with validation
    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Deposit must be positive");
        this.balance += amount;
        System.out.printf("Deposited %.2f. New balance: %.2f%n", amount, balance);
    }

    // Controlled withdrawal with business logic
    public void withdraw(double amount) {
        if (amount <= 0)       throw new IllegalArgumentException("Amount must be positive");
        if (amount > balance)  throw new IllegalStateException("Insufficient funds");
        this.balance -= amount;
        System.out.printf("Withdrew %.2f. New balance: %.2f%n", amount, balance);
    }

    @Override
    public String toString() {
        return String.format("Account[%s, owner=%s, balance=%.2f]",
                             accountNumber, owner, balance);
    }
}

// Usage
class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount("ACC001", "Alice", 1000.0);
        acc.deposit(500.0);
        acc.withdraw(200.0);
        System.out.println(acc);
    }
}`,
    language: 'java',
    notes: [
      'Make fields private by default — expose only what is necessary',
      'Use final for fields that should never change after construction',
      'Validate data inside setters to enforce business rules',
      'Encapsulation is the foundation of all other OOP principles',
    ],
    prev: 'java-collections',
    next: 'oop-inheritance',
  },

  'oop-inheritance': {
    id: 'oop-inheritance',
    course: 'oop',
    title: 'Inheritance',
    videoId: 'Zs342ePFvRI',
    content: `## What is Inheritance?

Inheritance allows a class (**child/subclass**) to acquire properties and methods of another class (**parent/superclass**), promoting **code reuse** and establishing an **IS-A relationship**.

## Key Keywords

- \`extends\` — inherit from a class
- \`super\` — refer to the parent class constructor or method
- \`@Override\` — override a parent method

## Important Rules

- Java supports **single inheritance** (one parent class only)
- All classes implicitly extend \`java.lang.Object\`
- Use \`final\` to prevent a class from being subclassed`,
    code: `// Parent class
public class Animal {
    protected String name;
    protected int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age  = age;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }

    public void sleep() {
        System.out.println(name + " is sleeping.");
    }

    public String describe() {
        return String.format("%s (age %d)", name, age);
    }
}

// Child class — inherits from Animal
public class Dog extends Animal {
    private String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);       // call parent constructor
        this.breed = breed;
    }

    // Additional method
    public void fetch() {
        System.out.println(name + " fetches the ball!");
    }

    // Override parent method
    @Override
    public String describe() {
        return super.describe() + ", breed=" + breed;
    }
}

// Another child class
public class Cat extends Animal {
    public Cat(String name, int age) {
        super(name, age);
    }

    public void purr() {
        System.out.println(name + " purrs... 😸");
    }
}

// Usage
class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Rex", 3, "Labrador");
        dog.eat();          // inherited
        dog.fetch();        // own method
        System.out.println(dog.describe());

        Cat cat = new Cat("Whiskers", 2);
        cat.sleep();        // inherited
        cat.purr();         // own method
    }
}`,
    language: 'java',
    notes: [
      'Use inheritance only for true IS-A relationships (Dog IS-A Animal ✓)',
      'Prefer composition over inheritance for HAS-A relationships',
      'Always use @Override annotation when overriding — catches typos',
      'super() must be the first statement in a subclass constructor',
    ],
    prev: 'oop-encapsulation',
    next: 'oop-polymorphism',
  },

  'oop-polymorphism': {
    id: 'oop-polymorphism',
    course: 'oop',
    title: 'Polymorphism',
    videoId: 'jhDUxynEQRI',
    content: `## What is Polymorphism?

Polymorphism means "**many forms**." In Java it allows objects of different types to be treated through a common interface, with the actual method called determined at runtime.

## Two Types

- **Compile-time (Static)** — Method Overloading
- **Runtime (Dynamic)** — Method Overriding via inheritance

## Dynamic Dispatch

When a parent class reference points to a child object, the JVM calls the **overridden version** of the method at runtime — this is dynamic dispatch.`,
    code: `// Base class
public abstract class Shape {
    protected String color;

    public Shape(String color) {
        this.color = color;
    }

    // Each subclass MUST implement this
    public abstract double area();
    public abstract double perimeter();

    public void describe() {
        System.out.printf("%s [color=%s, area=%.2f, perimeter=%.2f]%n",
            getClass().getSimpleName(), color, area(), perimeter());
    }
}

public class Circle extends Shape {
    private double radius;
    public Circle(String color, double radius) {
        super(color); this.radius = radius;
    }
    @Override public double area()      { return Math.PI * radius * radius; }
    @Override public double perimeter() { return 2 * Math.PI * radius; }
}

public class Rectangle extends Shape {
    private double width, height;
    public Rectangle(String color, double width, double height) {
        super(color); this.width = width; this.height = height;
    }
    @Override public double area()      { return width * height; }
    @Override public double perimeter() { return 2 * (width + height); }
}

// Polymorphic usage
class Main {
    public static void printShape(Shape s) {   // accepts ANY Shape
        s.describe();
    }

    public static void main(String[] args) {
        // Runtime polymorphism — parent reference, child object
        Shape[] shapes = {
            new Circle("Red", 5),
            new Rectangle("Blue", 4, 6),
            new Circle("Green", 3),
        };

        double totalArea = 0;
        for (Shape s : shapes) {
            printShape(s);               // calls overridden method
            totalArea += s.area();
        }
        System.out.printf("Total area: %.2f%n", totalArea);
    }
}`,
    language: 'java',
    notes: [
      'Runtime polymorphism is resolved by the JVM, not the compiler',
      'You can upcast implicitly; downcast requires explicit cast + instanceof check',
      'Use instanceof (or pattern matching in Java 16+) before downcasting',
      'Polymorphism enables the Open/Closed Principle — open for extension, closed for modification',
    ],
    prev: 'oop-inheritance',
    next: 'oop-abstraction',
  },

  'oop-abstraction': {
    id: 'oop-abstraction',
    course: 'oop',
    title: 'Abstraction',
    videoId: 'HvPlEJ3LHgE',
    content: `## What is Abstraction?

Abstraction means **hiding implementation details** and exposing only the **essential functionality**. Users interact with what a class *does*, not *how* it does it.

## Abstract Class vs Interface

| Feature            | Abstract Class            | Interface (Java 8+)          |
|--------------------|---------------------------|------------------------------|
| Instantiation      | Cannot be instantiated    | Cannot be instantiated       |
| Methods            | Abstract + concrete       | Abstract + default + static  |
| Fields             | Any type                  | Only static final constants  |
| Inheritance        | Single class              | Multiple interfaces           |
| Use when           | Shared base + some logic  | Contract definition           |`,
    code: `// Abstract class — partial implementation
public abstract class Vehicle {
    protected String make;
    protected String model;
    protected int year;

    public Vehicle(String make, String model, int year) {
        this.make = make; this.model = model; this.year = year;
    }

    // Concrete method — shared implementation
    public String getInfo() {
        return year + " " + make + " " + model;
    }

    // Abstract methods — subclasses MUST implement
    public abstract void start();
    public abstract void stop();
    public abstract int getMaxSpeed();
}

// Concrete implementation
public class ElectricCar extends Vehicle {
    private int batteryLevel;

    public ElectricCar(String make, String model, int year) {
        super(make, model, year);
        this.batteryLevel = 100;
    }

    @Override
    public void start() {
        System.out.println(getInfo() + ": Silently starting... ⚡");
    }
    @Override
    public void stop() {
        System.out.println(getInfo() + ": Regenerative braking activated.");
    }
    @Override
    public int getMaxSpeed() { return 250; }
}

// Interface — pure contract
interface Chargeable {
    int MAX_CHARGE = 100;                          // implicitly public static final
    void charge(int percentage);                    // implicitly public abstract
    default boolean isFullyCharged(int level) {    // default implementation
        return level >= MAX_CHARGE;
    }
}

class Main {
    public static void main(String[] args) {
        Vehicle car = new ElectricCar("Tesla", "Model 3", 2024);
        car.start();
        System.out.println("Max speed: " + car.getMaxSpeed() + " km/h");
        car.stop();
    }
}`,
    language: 'java',
    notes: [
      'Abstract classes cannot be instantiated with new',
      'A class with even one abstract method must be declared abstract',
      'From Java 8, interfaces can have default and static methods',
      'From Java 9, interfaces can have private methods',
    ],
    prev: 'oop-polymorphism',
    next: 'oop-interfaces',
  },

  'oop-interfaces': {
    id: 'oop-interfaces',
    course: 'oop',
    title: 'Interfaces',
    videoId: 'GhslBwrRsnw',
    content: `## Interfaces in Java

An interface is a **pure contract** — it defines *what* a class must do, not *how*. A class can implement multiple interfaces, solving Java's single-inheritance limitation.

## Functional Interfaces (Java 8+)

An interface with exactly **one abstract method** is a functional interface. These can be used with **lambda expressions**.

## Common Built-in Functional Interfaces

- \`Runnable\` — \`void run()\`
- \`Comparable<T>\` — \`int compareTo(T)\`
- \`Iterable<T>\` — \`Iterator<T> iterator()\`
- \`Predicate<T>\` — \`boolean test(T)\`
- \`Function<T,R>\` — \`R apply(T)\``,
    code: `// Defining interfaces
@FunctionalInterface
interface Printable {
    void print();                           // single abstract method
}

interface Saveable {
    void save();
    default void backup() {
        System.out.println("Backing up to cloud...");
    }
}

interface Shareable {
    void share(String platform);
}

// Class implementing multiple interfaces
public class Document implements Printable, Saveable, Shareable {
    private String title;
    private String content;

    public Document(String title, String content) {
        this.title   = title;
        this.content = content;
    }

    @Override public void print()  { System.out.println("Printing: " + title); }
    @Override public void save()   { System.out.println("Saving: " + title + " to disk"); }
    @Override public void share(String platform) {
        System.out.println("Sharing '" + title + "' on " + platform);
    }
}

// Lambda — implement functional interface inline
class Main {
    public static void main(String[] args) {
        Document doc = new Document("Java Guide", "Learn Java step by step.");
        doc.print();
        doc.save();
        doc.backup();      // default method
        doc.share("LinkedIn");

        // Lambda expression for Printable (functional interface)
        Printable greeting = () -> System.out.println("Hello from lambda!");
        greeting.print();

        // java.util.function examples
        java.util.function.Predicate<String> isLong = s -> s.length() > 5;
        System.out.println(isLong.test("Hi"));       // false
        System.out.println(isLong.test("Hello Java")); // true

        java.util.function.Function<Integer, String> classify =
            n -> n > 0 ? "positive" : n < 0 ? "negative" : "zero";
        System.out.println(classify.apply(-3));      // negative
    }
}`,
    language: 'java',
    notes: [
      'A class can implement multiple interfaces — this is Java\'s way of multiple inheritance',
      '@FunctionalInterface annotation is optional but good practice',
      'Default methods allow adding new methods without breaking existing implementations',
      'Prefer interfaces over abstract classes for defining contracts',
    ],
    prev: 'oop-abstraction',
    next: 'spring-ioc',
  },

  /* ── SPRING ──────────────────────────────────────── */
  'spring-ioc': {
    id: 'spring-ioc',
    course: 'spring',
    title: 'IoC Container',
    videoId: 'aS9SQITRocc',
    content: `## Inversion of Control (IoC)

IoC is a design principle where the **control of object creation and dependency wiring** is handed over to a framework (Spring), rather than done manually in your code.

## Traditional vs Spring Approach

**Without IoC:**
\`\`\`java
UserService service = new UserService(new UserRepository(new DataSource(...)));
\`\`\`

**With IoC (Spring):**
Spring creates and wires these objects for you.

## Spring's IoC Container

Spring's IoC container is represented by the \`ApplicationContext\` interface. It:
- Creates beans (objects)
- Injects dependencies
- Manages the full bean lifecycle

## Benefits

- Loose coupling between components
- Easier unit testing (swap implementations)
- Centralized configuration`,
    code: `// Service interface
public interface GreetingService {
    String greet(String name);
}

// Implementation — annotated as a Spring bean
import org.springframework.stereotype.Service;

@Service
public class FriendlyGreetingService implements GreetingService {

    @Override
    public String greet(String name) {
        return "Hello, " + name + "! Welcome to Spring IoC!";
    }
}

// Controller that USES the service (IoC — Spring injects it)
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GreetingController {

    private final GreetingService greetingService;

    // Constructor injection (preferred)
    @Autowired
    public GreetingController(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    public void run() {
        System.out.println(greetingService.greet("Developer"));
    }
}

// Spring Boot entry point — bootstraps the IoC container
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(Application.class, args);

        // Retrieve bean from container
        GreetingController controller = ctx.getBean(GreetingController.class);
        controller.run();
    }
}`,
    language: 'java',
    notes: [
      'IoC inverts the dependency graph — you declare what you need, Spring provides it',
      'ApplicationContext is the main IoC container interface; BeanFactory is the lower-level one',
      'Spring Boot auto-configures the ApplicationContext for you',
      'Beans are singletons by default in Spring',
    ],
    prev: 'oop-interfaces',
    next: 'spring-di',
  },

  'spring-di': {
    id: 'spring-di',
    course: 'spring',
    title: 'Dependency Injection',
    videoId: 'ET_n9On8aLQ',
    content: `## Dependency Injection (DI)

DI is the concrete mechanism through which IoC is achieved. Instead of a class creating its own dependencies, those **dependencies are injected from the outside**.

## Three Types of DI in Spring

1. **Constructor Injection** — dependencies passed via constructor (recommended)
2. **Setter Injection** — dependencies set via setter methods
3. **Field Injection** — dependencies injected directly into fields with \`@Autowired\`

## Why Constructor Injection is Best

- Guarantees the object is fully initialised
- Dependencies are immutable (can be \`final\`)
- Easier to write unit tests (no Spring context needed)
- Immediately obvious what the class needs`,
    code: `import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

// Repository layer
@Repository
public class UserRepository {
    public String findUserById(Long id) {
        // In real app: query database
        return "User#" + id;
    }
}

// Email service
@Service
public class EmailService {
    @Value("\${app.email.from:noreply@app.com}")  // read from application.properties
    private String fromAddress;

    public void sendWelcome(String email) {
        System.out.printf("Sending welcome email from %s to %s%n", fromAddress, email);
    }
}

// UserService with CONSTRUCTOR injection (preferred)
@Service
public class UserService {

    private final UserRepository userRepository;
    private final EmailService emailService;

    // @Autowired optional when there's a single constructor (Spring 4.3+)
    @Autowired
    public UserService(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService   = emailService;
    }

    public void registerUser(Long id, String email) {
        String user = userRepository.findUserById(id);
        System.out.println("Registering: " + user);
        emailService.sendWelcome(email);
    }
}

// Unit test without Spring — inject mocks via constructor
class UserServiceTest {
    @org.junit.jupiter.api.Test
    void testRegister() {
        UserRepository mockRepo = id -> "MockUser";
        EmailService mockEmail  = new EmailService();
        UserService service     = new UserService(mockRepo, mockEmail);
        service.registerUser(1L, "test@test.com");
    }
}`,
    language: 'java',
    notes: [
      'Prefer constructor injection over field injection',
      'With a single constructor, @Autowired is optional in Spring 4.3+',
      '@Value injects values from application.properties or environment',
      'Use @Qualifier when multiple beans of the same type exist',
    ],
    prev: 'spring-ioc',
    next: 'spring-beans',
  },

  'spring-beans': {
    id: 'spring-beans',
    course: 'spring',
    title: 'Spring Beans',
    videoId: 'BARE4zjC0io',
    content: `## Spring Beans

A **bean** is simply a Java object that is managed by the Spring IoC container. The container handles creation, configuration, and lifecycle of beans.

## Bean Definition Annotations

| Annotation      | Layer       | Purpose                         |
|----------------|-------------|----------------------------------|
| \`@Component\`   | Any         | Generic Spring-managed bean      |
| \`@Service\`     | Business    | Service layer bean               |
| \`@Repository\`  | Data access | Data layer + exception translation|
| \`@Controller\`  | Web         | Spring MVC controller            |
| \`@Bean\`        | Config      | Manual bean definition in @Configuration |

## Bean Scopes

- **singleton** (default) — one instance per container
- **prototype** — new instance every time requested
- **request** — one per HTTP request (web apps)
- **session** — one per HTTP session (web apps)`,
    code: `import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.*;
import org.springframework.stereotype.*;

// ── @Configuration class — manual bean registration ─
@Configuration
public class AppConfig {

    // Define a bean manually — useful for third-party classes
    @Bean
    @Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)  // default
    public ConnectionPool connectionPool() {
        return new ConnectionPool("jdbc:postgresql://localhost/mydb", 10);
    }

    @Bean
    @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)  // new instance every call
    public AuditLogger auditLogger() {
        return new AuditLogger();
    }
}

// ── Stereotype annotations ───────────────────────
@Repository
public class ProductRepository {
    public String findById(Long id) {
        return "Product-" + id;
    }
}

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public String getProduct(Long id) {
        return repo.findById(id);
    }
}

// ── Bean lifecycle hooks ─────────────────────────
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Component
public class CacheManager {

    @PostConstruct          // called after bean is fully initialised
    public void init() {
        System.out.println("CacheManager initialised — loading cache...");
    }

    @PreDestroy             // called just before bean is destroyed
    public void cleanup() {
        System.out.println("CacheManager shutting down — clearing cache...");
    }
}`,
    language: 'java',
    notes: [
      '@Component is the parent stereotype; @Service, @Repository, @Controller extend it',
      'Use @Configuration + @Bean for third-party classes you cannot annotate',
      '@PostConstruct / @PreDestroy manage lifecycle hooks cleanly',
      'Singleton beans must be thread-safe since they\'re shared across requests',
    ],
    prev: 'spring-di',
    next: 'spring-mvc',
  },

  'spring-mvc': {
    id: 'spring-mvc',
    course: 'spring',
    title: 'Spring MVC',
    videoId: 'BjNhGaZDr0Y',
    content: `## Spring MVC

Spring MVC is the web framework within Spring that implements the **Model-View-Controller** pattern. It processes HTTP requests through a **DispatcherServlet** that routes requests to controllers.

## Request Flow

\`\`\`
Client → DispatcherServlet → HandlerMapping → Controller → Service → View/JSON
\`\`\`

## Key Annotations

| Annotation         | Description                              |
|-------------------|------------------------------------------|
| \`@Controller\`     | MVC controller that returns views        |
| \`@RestController\` | Controller that returns JSON/XML (= @Controller + @ResponseBody) |
| \`@RequestMapping\` | Map URLs to controller methods           |
| \`@GetMapping\`     | HTTP GET shorthand                       |
| \`@PostMapping\`    | HTTP POST shorthand                      |
| \`@PathVariable\`   | Extract value from URL path              |
| \`@RequestParam\`   | Extract query parameter                  |
| \`@RequestBody\`    | Deserialise request body to Java object  |`,
    code: `import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // GET /api/products
    @GetMapping
    public ResponseEntity<List<Product>> getAll() {
        return ResponseEntity.ok(productService.findAll());
    }

    // GET /api/products/42
    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable Long id) {
        return productService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // GET /api/products?category=electronics&minPrice=100
    @GetMapping("/search")
    public ResponseEntity<List<Product>> search(
            @RequestParam String category,
            @RequestParam(defaultValue = "0") double minPrice) {
        return ResponseEntity.ok(productService.search(category, minPrice));
    }

    // POST /api/products
    @PostMapping
    public ResponseEntity<Product> create(@RequestBody @Valid ProductRequest request) {
        Product created = productService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // PUT /api/products/42
    @PutMapping("/{id}")
    public ResponseEntity<Product> update(
            @PathVariable Long id,
            @RequestBody @Valid ProductRequest request) {
        return ResponseEntity.ok(productService.update(id, request));
    }

    // DELETE /api/products/42
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }
}`,
    language: 'java',
    notes: [
      '@RestController = @Controller + @ResponseBody — use for REST APIs',
      'ResponseEntity gives full control over status codes and headers',
      'Use @Valid with @RequestBody to trigger bean validation',
      'DispatcherServlet is auto-configured by Spring Boot',
    ],
    prev: 'spring-beans',
    next: 'sb-setup',
  },

  /* ── SPRING BOOT ─────────────────────────────────── */
  'sb-setup': {
    id: 'sb-setup',
    course: 'springboot',
    title: 'Spring Boot Project Setup',
    videoId: 'vtPkZShrvXQ',
    content: `## What is Spring Boot?

Spring Boot is an opinionated framework built on top of Spring that minimises boilerplate configuration. It uses **convention over configuration** to let you start a production-ready application in minutes.

## Key Features

- **Auto-configuration** — automatically configures beans based on classpath
- **Embedded server** — ships with Tomcat/Jetty/Undertow (no WAR deployment)
- **Starter POMs** — curated dependency sets
- **Actuator** — production-ready health/metrics endpoints

## Starting a Project

Use [start.spring.io](https://start.spring.io) or the Spring Initializr in IntelliJ IDEA.

## Project Structure

\`\`\`
src/main/java/com/example/app/
├── Application.java           ← main class
├── controller/
├── service/
├── repository/
├── model/
└── dto/
src/main/resources/
├── application.properties     ← config
└── static/
\`\`\``,
    code: `<!-- pom.xml — Maven dependencies -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.3.0</version>
</parent>

<dependencies>
    <!-- Web (includes Spring MVC + embedded Tomcat) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- JPA + Hibernate -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- Validation (Bean Validation / Hibernate Validator) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>

    <!-- H2 in-memory database for development -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Actuator — health, metrics, info endpoints -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>

    <!-- DevTools — live reload -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <optional>true</optional>
    </dependency>

    <!-- Tests -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>`,
    language: 'xml',
    notes: [
      'spring-boot-starter-parent manages compatible dependency versions',
      'Each starter brings in a curated set of related dependencies',
      'DevTools enables auto-restart and LiveReload in development',
      'Run with: mvn spring-boot:run or java -jar target/app.jar',
    ],
    prev: 'spring-mvc',
    next: 'sb-rest',
  },

  'sb-rest': {
    id: 'sb-rest',
    course: 'springboot',
    title: 'Building REST APIs',
    videoId: 'vtPkZShrvXQ',
    content: `## REST APIs with Spring Boot

Spring Boot makes building RESTful APIs effortless with \`@RestController\` and auto-configured Jackson for JSON serialisation.

## Best Practices

- Use **resource-oriented URLs** (/api/users, /api/orders)
- Return appropriate **HTTP status codes** (200, 201, 404, 400, 500)
- Use **DTOs** (Data Transfer Objects) to decouple API contracts from entities
- Version your API (/api/v1/...)

## Application Properties

\`\`\`properties
server.port=8080
spring.application.name=my-api
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.show-sql=true
\`\`\``,
    code: `// ── DTO (Data Transfer Object) ──────────────────
public record CreateUserRequest(
    @NotBlank String name,
    @Email    String email,
    @Min(18)  int    age
) {}

public record UserResponse(Long id, String name, String email, int age) {}

// ── Entity ───────────────────────────────────────
@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private int age;
    // getters/setters omitted for brevity
}

// ── Repository ──────────────────────────────────
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByAgeGreaterThan(int age);
}

// ── Service ─────────────────────────────────────
@Service
@Transactional
public class UserService {
    private final UserRepository repo;
    public UserService(UserRepository repo) { this.repo = repo; }

    public List<UserResponse> findAll() {
        return repo.findAll().stream()
            .map(u -> new UserResponse(u.getId(), u.getName(), u.getEmail(), u.getAge()))
            .toList();
    }

    public UserResponse create(CreateUserRequest req) {
        User user = new User(req.name(), req.email(), req.age());
        User saved = repo.save(user);
        return new UserResponse(saved.getId(), saved.getName(), saved.getEmail(), saved.getAge());
    }
}

// ── Controller ──────────────────────────────────
@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService service;
    public UserController(UserService service) { this.service = service; }

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping
    public ResponseEntity<UserResponse> create(@RequestBody @Valid CreateUserRequest req) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(req));
    }
}`,
    language: 'java',
    notes: [
      'Java 16+ records are perfect for immutable DTOs',
      '@Transactional on the service layer manages database transactions',
      'Jackson automatically serialises/deserialises Java objects to/from JSON',
      'Always use DTOs — never expose JPA entities directly in API responses',
    ],
    prev: 'sb-setup',
    next: 'sb-exceptions',
  },

  'sb-exceptions': {
    id: 'sb-exceptions',
    course: 'springboot',
    title: 'Exception Handling',
    videoId: 'PzK4ZXa2Tbc',
    content: `## Global Exception Handling

Spring Boot provides \`@ControllerAdvice\` / \`@RestControllerAdvice\` for centralised exception handling across all controllers — no need to repeat try-catch blocks.

## Problem Details (RFC 7807)

Spring Boot 3 introduced built-in support for RFC 7807 Problem Details — a standardised JSON error format:

\`\`\`json
{
  "type": "https://api.example.com/errors/not-found",
  "title": "Resource Not Found",
  "status": 404,
  "detail": "User with id 99 was not found",
  "instance": "/api/v1/users/99"
}
\`\`\``,
    code: `// ── Custom exceptions ───────────────────────────
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String resource, Object id) {
        super(resource + " with id " + id + " was not found");
    }
}

public class DuplicateResourceException extends RuntimeException {
    public DuplicateResourceException(String message) { super(message); }
}

// ── Error response DTO ───────────────────────────
public record ErrorResponse(
    int    status,
    String error,
    String message,
    String path,
    LocalDateTime timestamp
) {}

// ── Global exception handler ─────────────────────
@RestControllerAdvice
public class GlobalExceptionHandler {

    // Handle 404 Not Found
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
            ResourceNotFoundException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(new ErrorResponse(
                404, "Not Found", ex.getMessage(),
                request.getRequestURI(), LocalDateTime.now()
            ));
    }

    // Handle 409 Conflict
    @ExceptionHandler(DuplicateResourceException.class)
    public ResponseEntity<ErrorResponse> handleDuplicate(
            DuplicateResourceException ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
            .body(new ErrorResponse(
                409, "Conflict", ex.getMessage(),
                request.getRequestURI(), LocalDateTime.now()
            ));
    }

    // Handle Bean Validation errors (@Valid)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors()
            .forEach(e -> errors.put(e.getField(), e.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errors);
    }

    // Catch-all fallback
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleAll(
            Exception ex, HttpServletRequest request) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(new ErrorResponse(
                500, "Internal Server Error", "An unexpected error occurred",
                request.getRequestURI(), LocalDateTime.now()
            ));
    }
}`,
    language: 'java',
    notes: [
      '@RestControllerAdvice = @ControllerAdvice + @ResponseBody',
      'More specific exception handlers take precedence over general ones',
      'Never expose stack traces in production error responses',
      'Log exceptions server-side even when returning clean error responses',
    ],
    prev: 'sb-rest',
    next: 'jpa-entities',
  },

  /* ── JPA ─────────────────────────────────────────── */
  'jpa-entities': {
    id: 'jpa-entities',
    course: 'jpa',
    title: 'JPA Entities',
    videoId: 'L06uGnF4IpY',
    content: `## JPA & Hibernate

**JPA (Jakarta Persistence API)** is the Java standard for ORM (Object-Relational Mapping). **Hibernate** is the most popular JPA implementation.

JPA maps Java objects (entities) to database tables, letting you work with objects instead of SQL.

## Entity Anatomy

- \`@Entity\` — marks the class as a JPA entity
- \`@Table\` — specify the table name (optional)
- \`@Id\` — marks the primary key
- \`@GeneratedValue\` — auto-generate PK values
- \`@Column\` — customise column mapping

## Hibernate DDL Auto

In \`application.properties\`:
\`\`\`properties
spring.jpa.hibernate.ddl-auto=update   # create | create-drop | validate | none
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
\`\`\``,
    code: `import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.*;

@Entity
@Table(name = "products", indexes = {
    @Index(name = "idx_product_sku", columnList = "sku", unique = true)
})
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false, length = 200)
    private String name;

    @Column(unique = true, nullable = false, length = 50)
    private String sku;

    @DecimalMin("0.0")
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Min(0)
    @Column(nullable = false)
    private int stockQuantity;

    @Enumerated(EnumType.STRING)          // store as "ACTIVE" / "DISCONTINUED"
    @Column(nullable = false, length = 20)
    private ProductStatus status;

    @Column(updatable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @PrePersist                           // called before first save
    protected void onCreate() {
        createdAt = updatedAt = LocalDateTime.now();
        if (status == null) status = ProductStatus.ACTIVE;
    }

    @PreUpdate                            // called before every update
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Constructors, getters, setters...
    public enum ProductStatus { ACTIVE, DISCONTINUED, OUT_OF_STOCK }
}`,
    language: 'java',
    notes: [
      'Every entity must have a no-arg constructor (can be protected)',
      '@Enumerated(EnumType.STRING) is safer than ORDINAL (survives enum reordering)',
      'Use @PrePersist / @PreUpdate for auditing timestamps automatically',
      '@Column(updatable=false) on createdAt prevents accidental overwrite',
    ],
    prev: 'sb-exceptions',
    next: 'jpa-repositories',
  },

  'jpa-repositories': {
    id: 'jpa-repositories',
    course: 'jpa',
    title: 'Spring Data Repositories',
    videoId: 'TUOwAMRklag',
    content: `## Spring Data JPA Repositories

Spring Data JPA eliminates boilerplate DAO code. You define an interface, Spring generates the implementation automatically.

## Repository Hierarchy

\`\`\`
Repository
  └── CrudRepository       (basic CRUD)
        └── PagingAndSortingRepository
              └── JpaRepository  (most feature-rich — use this)
\`\`\`

## Query Methods

Spring Data derives queries from method names:
- \`findByName\` → \`SELECT * FROM ... WHERE name = ?\`
- \`findByAgeGreaterThan\` → \`... WHERE age > ?\`
- \`findByNameAndEmail\` → \`... WHERE name = ? AND email = ?\``,
    code: `import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.math.BigDecimal;
import java.util.*;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // ── Derived queries (auto-implemented) ──────────
    Optional<Product> findBySku(String sku);
    List<Product> findByStatus(Product.ProductStatus status);
    List<Product> findByPriceBetween(BigDecimal min, BigDecimal max);
    List<Product> findByNameContainingIgnoreCase(String keyword);
    boolean existsBySku(String sku);
    long countByStatus(Product.ProductStatus status);

    // ── JPQL query ──────────────────────────────────
    @Query("SELECT p FROM Product p WHERE p.price < :maxPrice AND p.status = 'ACTIVE' ORDER BY p.price ASC")
    List<Product> findAffordableProducts(@Param("maxPrice") BigDecimal maxPrice);

    // ── Native SQL query ────────────────────────────
    @Query(value = "SELECT * FROM products WHERE stock_quantity < :threshold", nativeQuery = true)
    List<Product> findLowStockProducts(@Param("threshold") int threshold);

    // ── Modifying query ─────────────────────────────
    @Modifying
    @Transactional
    @Query("UPDATE Product p SET p.stockQuantity = p.stockQuantity - :qty WHERE p.id = :id")
    int decrementStock(@Param("id") Long id, @Param("qty") int qty);

    // ── Pagination and sorting ──────────────────────
    Page<Product> findByStatus(Product.ProductStatus status, Pageable pageable);
}

// ── Usage in service ─────────────────────────────
@Service
@Transactional(readOnly = true)
public class ProductService {
    private final ProductRepository repo;
    public ProductService(ProductRepository repo) { this.repo = repo; }

    public Page<Product> getActiveProducts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("name").ascending());
        return repo.findByStatus(Product.ProductStatus.ACTIVE, pageable);
    }

    @Transactional
    public void deductStock(Long productId, int quantity) {
        int updated = repo.decrementStock(productId, quantity);
        if (updated == 0) throw new ResourceNotFoundException("Product", productId);
    }
}`,
    language: 'java',
    notes: [
      'JpaRepository provides findAll, findById, save, delete and more out of the box',
      'Use @Transactional(readOnly=true) on the service for read operations — improves performance',
      '@Modifying is required for @Query that UPDATE or DELETE',
      'Pagination prevents loading millions of rows — always paginate list endpoints',
    ],
    prev: 'jpa-entities',
    next: 'jpa-relationships',
  },

  'jpa-relationships': {
    id: 'jpa-relationships',
    course: 'jpa',
    title: 'JPA Relationships',
    videoId: 'C9AhBRqaVkA',
    content: `## Entity Relationships

JPA supports mapping all standard database relationships using annotations.

## Types

| Annotation    | DB Relationship        | Example                      |
|--------------|------------------------|------------------------------|
| @OneToOne    | 1 : 1                  | User ↔ UserProfile           |
| @OneToMany   | 1 : N                  | Order → OrderItems           |
| @ManyToOne   | N : 1                  | OrderItem → Product          |
| @ManyToMany  | N : N                  | Student ↔ Course             |

## Fetch Types

- \`EAGER\` — loads related data immediately (can cause N+1 problem)
- \`LAZY\` — loads related data on first access (preferred for collections)

## Cascade Types

- \`CascadeType.PERSIST\` — saving parent also saves children
- \`CascadeType.MERGE\` — updating parent also updates children
- \`CascadeType.ALL\` — all operations cascade`,
    code: `import jakarta.persistence.*;
import java.util.*;

// One Order has many OrderItems
@Entity @Table(name = "orders")
public class Order {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerEmail;

    // One-to-Many: cascade means saving Order saves all items
    @OneToMany(mappedBy = "order",
               cascade = CascadeType.ALL,
               fetch = FetchType.LAZY,
               orphanRemoval = true)
    private List<OrderItem> items = new ArrayList<>();

    // Convenience method to maintain bidirectional link
    public void addItem(OrderItem item) {
        items.add(item);
        item.setOrder(this);
    }
}

// Many OrderItems belong to one Order, each refers to one Product
@Entity @Table(name = "order_items")
public class OrderItem {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many-to-One back to Order
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    // Many-to-One to Product (no cascade — product is independent)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    private int quantity;
    private BigDecimal unitPrice;
}

// Many-to-Many: Student ↔ Course
@Entity
public class Student {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "student_courses",
        joinColumns       = @JoinColumn(name = "student_id"),
        inverseJoinColumns= @JoinColumn(name = "course_id"))
    private Set<Course> courses = new HashSet<>();
}`,
    language: 'java',
    notes: [
      'Always use FetchType.LAZY for @OneToMany and @ManyToMany',
      'Use @EntityGraph or JOIN FETCH in JPQL to avoid N+1 queries',
      'Avoid CascadeType.ALL on @ManyToOne — it can delete shared entities',
      'The "owning side" (with @JoinColumn) controls the foreign key in the database',
    ],
    prev: 'jpa-repositories',
    next: 'jpa-jpql',
  },

  'jpa-jpql': {
    id: 'jpa-jpql',
    course: 'jpa',
    title: 'JPQL Queries',
    videoId: 'siEf9HGQaZ0',
    content: `## JPQL (Jakarta Persistence Query Language)

JPQL is an object-oriented query language, similar to SQL but operating on **entity objects** rather than database tables.

## Key Differences from SQL

| SQL                       | JPQL                          |
|--------------------------|-------------------------------|
| FROM users u             | FROM User u                   |
| SELECT u.first_name      | SELECT u.firstName            |
| JOIN orders o ON ...     | JOIN u.orders o               |

## Criteria API

The **Criteria API** provides a type-safe, programmatic way to build dynamic queries — no string manipulation needed. Best used with **JPA Metamodel** for full type safety.`,
    code: `import jakarta.persistence.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.*;

public interface OrderRepository extends JpaRepository<Order, Long> {

    // Basic JPQL
    @Query("SELECT o FROM Order o WHERE o.customerEmail = :email")
    List<Order> findByCustomer(@Param("email") String email);

    // JOIN — fetch order with items in ONE query (avoids N+1)
    @Query("SELECT DISTINCT o FROM Order o JOIN FETCH o.items i WHERE o.id = :id")
    Optional<Order> findByIdWithItems(@Param("id") Long id);

    // Aggregation
    @Query("SELECT COUNT(o) FROM Order o WHERE o.customerEmail = :email")
    long countByCustomer(@Param("email") String email);

    // Projection — return only needed fields (DTO projection)
    @Query("SELECT new com.example.dto.OrderSummary(o.id, o.customerEmail, COUNT(i)) " +
           "FROM Order o JOIN o.items i GROUP BY o.id, o.customerEmail")
    List<OrderSummary> findOrderSummaries();

    // Dynamic query using Criteria API (in service)
}

// ── Criteria API for dynamic queries ────────────
@Service
public class OrderQueryService {
    @PersistenceContext
    private EntityManager em;

    public List<Order> search(String email, Integer minItems) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Order> cq = cb.createQuery(Order.class);
        Root<Order> order = cq.from(Order.class);

        List<Predicate> predicates = new ArrayList<>();

        if (email != null) {
            predicates.add(cb.equal(order.get("customerEmail"), email));
        }
        if (minItems != null) {
            Join<Order, OrderItem> items = order.join("items");
            cq.groupBy(order.get("id"));
            predicates.add(cb.ge(cb.count(items), minItems));
        }

        cq.where(predicates.toArray(new Predicate[0]));
        cq.orderBy(cb.desc(order.get("id")));

        return em.createQuery(cq).getResultList();
    }
}`,
    language: 'java',
    notes: [
      'Always use JOIN FETCH for collections you know you\'ll need — avoids N+1',
      'DTO projections (new com.example.Dto(...)) are more efficient than loading full entities',
      'Use Criteria API for complex dynamic queries; JPQL for static ones',
      'Named queries (@NamedQuery) are validated at startup — fail fast on typos',
    ],
    prev: 'jpa-relationships',
    next: null,
  },
};

/* ── Sidebar structure ──────────────────────────────── */
export interface SidebarSection {
  id: string;
  label: string;
  color: string;
  iconName: 'Coffee' | 'Puzzle' | 'Leaf' | 'Rocket' | 'Database';
  items: { id: string; label: string }[];
}

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    id: 'java',
    label: 'Java Basics',
    color: '#FF6B3D',
    iconName: 'Coffee',
    items: [
      { id: 'java-intro',       label: 'Introduction' },
      { id: 'java-variables',   label: 'Variables & Data Types' },
      { id: 'java-loops',       label: 'Loops' },
      { id: 'java-arrays',      label: 'Arrays' },
      { id: 'java-methods',     label: 'Methods' },
      { id: 'java-collections', label: 'Collections' },
    ],
  },
  {
    id: 'oop',
    label: 'OOP Concepts',
    color: '#9C7CF6',
    iconName: 'Puzzle',
    items: [
      { id: 'oop-encapsulation', label: 'Encapsulation' },
      { id: 'oop-inheritance',   label: 'Inheritance' },
      { id: 'oop-polymorphism',  label: 'Polymorphism' },
      { id: 'oop-abstraction',   label: 'Abstraction' },
      { id: 'oop-interfaces',    label: 'Interfaces' },
    ],
  },
  {
    id: 'spring',
    label: 'Spring Framework',
    color: '#4CAF89',
    iconName: 'Leaf',
    items: [
      { id: 'spring-ioc',   label: 'IoC Container' },
      { id: 'spring-di',    label: 'Dependency Injection' },
      { id: 'spring-beans', label: 'Beans' },
      { id: 'spring-mvc',   label: 'Spring MVC' },
    ],
  },
  {
    id: 'springboot',
    label: 'Spring Boot',
    color: '#F4C542',
    iconName: 'Rocket',
    items: [
      { id: 'sb-setup',      label: 'Project Setup' },
      { id: 'sb-rest',       label: 'REST APIs' },
      { id: 'sb-exceptions', label: 'Exception Handling' },
    ],
  },
  {
    id: 'jpa',
    label: 'JPA / Hibernate',
    color: '#E05FA0',
    iconName: 'Database',
    items: [
      { id: 'jpa-entities',      label: 'Entities' },
      { id: 'jpa-repositories',  label: 'Repositories' },
      { id: 'jpa-relationships', label: 'Relationships' },
      { id: 'jpa-jpql',          label: 'JPQL' },
    ],
  },
];
