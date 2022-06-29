function createCalculator() {
  return {
    display: document.querySelector("#display"),
    previousEquation: document.querySelector(".previous-equation"),

    addValueToEquation: function (value) {
      this.display.value += value;
    },
    resolveEquation: function () {
      let equation = this.display.value;
      try {
        if (!equation) throw new TypeError("Precisa ser um número");
        let result = eval(equation);
        this.previousEquation.innerText = `${this.display.value}=${result}`;
        this.display.value = result;
      } catch (e) {
        alert("Operação inválida");
      }
    },
    addListeners: function () {
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-num")) {
          this.addValueToEquation(e.target.innerText);
        }
        if (e.target.classList.contains("btn-clear")) {
          this.display.value = "";
        }
        if (e.target.classList.contains("btn-del")) {
          this.display.value = this.display.value.slice(0, -1);
        }
        if (e.target.classList.contains("btn-equals")) {
          this.resolveEquation();
        }
      });
      this.display.addEventListener("keyup", (e) => {
        if (e.key === "Enter") this.resolveEquation();
        return;
      });
    },

    init: function () {
      this.addListeners();
    },
  };
}

const calculator = createCalculator();
calculator.init();
