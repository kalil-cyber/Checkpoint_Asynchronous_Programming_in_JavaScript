// Tâche 01: Itérer avec Async/Await
async function iterateWithAsyncAwait(values) {
    for (let i = 0; i < values.length; i++) {
      // Introduire un délai de 1 seconde entre chaque enregistrement
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Valeur ${i + 1}: ${values[i]}`);
    }
  }
  
  // Tâche 02: Attendre un appel
  async function awaitCall() {
    try {
      // Simuler un appel API
      const response = await new Promise((resolve, reject) => 
        setTimeout(() => resolve({ data: 'Données obtenues avec succès' }), 2000)
      );
      console.log('Réponse API:', response.data);
    } catch (error) {
      console.log('Erreur lors de l\'appel API:', error.message);
    }
  }
  
  // Tâche 03: Attente de requêtes simultanées avec Promise.all()
  async function concurrentRequests() {
    try {
      // Simuler deux appels API en parallèle avec Promise.all()
      const requests = [
        new Promise(resolve => setTimeout(() => resolve('Réponse de la première API'), 3000)),
        new Promise(resolve => setTimeout(() => resolve('Réponse de la deuxième API'), 2000))
      ];
  
      const results = await Promise.all(requests);
      console.log('Résultats combinés:', results);
    } catch (error) {
      console.log('Erreur lors des requêtes simultanées:', error);
    }
  }
  
  // Tester les fonctions
  async function test() {
    // Tâche 01: Itérer sur un tableau avec un délai de 1 seconde
    console.log("Début de l'itération...");
    await iterateWithAsyncAwait(['A', 'B', 'C', 'D']);
  
    // Tâche 02: Attendre un appel API
    console.log("\nDébut de l'appel API...");
    await awaitCall();
  
    // Tâche 03: Attente de requêtes simultanées
    console.log("\nDébut des requêtes simultanées...");
    await concurrentRequests();
  }
  
  // Exécution des tests
  test();
  