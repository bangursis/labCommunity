public class PartyController {
   @AuraEnabled
   public static List<AggregateResult> checkBoozes(){
     return [SELECT Type__C, Count(Id) FROM Booze__c GROUP BY Type__C];
   } 
}
