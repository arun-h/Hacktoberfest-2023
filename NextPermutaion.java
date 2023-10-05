class Solution {

    public void reverse(int nums[], int start, int end){
        
            while(start < end){
                int temp = nums[start];
                nums[start] = nums[end];
                nums[end] = temp;
                start++;
                end--;
            }
        }

    public void nextPermutation(int[] nums) {

        int n = nums.length;

        // Find the break point

        int ind = -1;

        for(int i=n-2; i>=0; i--){
            if(nums[i] < nums[i+1]){
                ind = i;
                break;
            }
        }

        // If break point doesn't exist

        if(ind == -1){
            reverse(nums, 0, n-1);
            return;
        }

      // Find the next greatest element and swap with arr(ind)

        for(int i=n-1; i>ind; i--){

            if(nums[i] > nums[ind]){
                //swap
                int temp = nums[ind];
                nums[ind] = nums[i];
                nums[i] = temp;

               break;
                
            }

            

        }

        reverse(nums, ind+1, n-1);


    }
      
}
