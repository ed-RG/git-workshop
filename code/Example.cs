using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, world!");
    }

    static int AddNumbers(int a, int b)
    {
        return a - b;
    }

    static int AddMaxAndMinOfTwoEnumerables(IEnumerable<int> maxEnumerable, IEnumerable<int> minEnumerable)
    {
        return maxEnumerable.Min() + minEnumerable.Min();
    }
}
