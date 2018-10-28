public class PartyController {
  @AuraEnabled
   public static List<Booze__c> checkBoozes(){
     return [SELECT Amount__c, Name FROM Booze__c WHERE Amount__c > 0];
   } 

   @AuraEnabled
   public static void pickABooze(Id bId, Integer amount){
     update new Booze__c(
       Id = bId,
       Amount__c = Integer.valueOf(amount)
     );
   }
}