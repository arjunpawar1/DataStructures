/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package quickfind;

import java.util.ArrayList;

/**
 *
 * @author arjun
 */
public class QuickFind 

{

    ArrayList<Integer> count = new ArrayList<>();
    int[] array;
    public QuickFind(int n) 
    {
    
      //give the size n to the array
        array = new int[n];
        
        //now assign the values straight sequentially
        
        for(int i =0;i<n;i++)
        {
            array[i]= i;
        }
                  
    
    }
    
    //now to find weather  two given items are connected or not
    
    
    public boolean connected(int a, int b)
    {
        //returns true if two have same index values
            return( array[a]==array[b]);
    
    }
    
    //now to perform union operation that is to join two given elements
    
    public void union(int a, int b)
    {
        int aa = array[a];
        int bb = array[b];
        
        for(int i=0;i<array.length;i++)
        {
            if(array[i] == aa)
            {
                array[i]=bb;
            }
        }
    }
    
    //number of sets
    
    public int Sets()
            {
                    for(int a : array)
                    {
                        if(!count.contains(a))
                        {
                            count.add(a);
                        }
                    }
            return count.size();
            
            }
    
    
    //print 
    public void print()
    {
    for(int a: array)
    {
            System.out.println(a);
    }   
    }
    
    public static void main(String[] args) 
    {
      QuickFind obj = new QuickFind(6);
      
      System.out.println();
      //now join 3,4
      obj.union(1, 2);
      obj.union(3, 4);
    obj.union(4, 5);
    obj.union(0, 1);
   // obj.print();
   //  System.out.println( obj.connected(3, 5));
    
    System.out.println(obj.Sets());
    }
    
}





 