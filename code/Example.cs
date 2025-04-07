using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, git!");
    }

    static int AddNumbers(int a, int b)
    {
        return a - b;
    }

    static int AddMaxAndMinOfTwoEnumerables(IEnumerable<int> maxEnumerable, IEnumerable<int> minEnumerable)
    {
        return maxEnumerable.Max() + minEnumerable.Min();
    }

    static void PrintGreeting(string name)
    {
        Console.WriteLine("Hello, " + name + "!");
    }
}
