const soldier = {
  name: "Musost",
  health: 10,
  weapon: {
    name: "Ak-47",
    patrons: 30,
  },
  provisions: 3,
  shoot() {
    if (this.weapon.patrons > 0) {
      this.weapon.patrons -= 1;
      console.log("Pau-Pau");
    } else {
      console.log("Quality of patrons is zero.Reload!");
    }
  },
  reload() {
    if (this.provisions > 0) {
      this.weapon.patrons = 30;
      this.provisions -= 1;
    }
  },
  hurt() {
    if (this.health > 0) {
      this.health -= 1;
    } else if (this.health === 0) {
      console.log("Soldier is dead. Game over.");
    }
  },
};
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.reload();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.shoot();
soldier.hurt();
soldier.hurt();
soldier.hurt();
soldier.hurt();
soldier.hurt();
soldier.hurt();
soldier.hurt();
soldier.hurt();
soldier.hurt();
soldier.hurt();
soldier.hurt();
