function checkEnding(a: string, b: string) {
    return a.endsWith(b);
  
  }
  console.log(checkEnding("green", "bluee"));

  interface String {    
    endsWith(searchString: string, endPosition?: number): boolean;
};