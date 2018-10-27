public class PartyController {
  @AuraEnabled
   public static List<Booze__c> checkBoozes(){
     return [SELECT Amount__c, Name FROM Booze__c WHERE Amount__c > 0];
   } 
}