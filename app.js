(function () {
  "use strict";

  /** 可编辑占位：把下面的微信号改成真实微信号 */
  var WECHAT_ID = "你的微信号";

  var form = document.getElementById("diagnosis-form");
  var cta = document.getElementById("wechat-cta");
  var summaryEl = document.getElementById("summary-text");
  var wechatIdEl = document.getElementById("wechat-id");
  var resetBtn = document.getElementById("reset-form");
  var toastEl = document.getElementById("toast");
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  var toastTimer = null;

  if (wechatIdEl) {
    wechatIdEl.textContent = WECHAT_ID || "你的微信号";
  }

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.hidden = true;
    }, 2200);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  function buildSummary(data) {
    return [
      "【99元文字诊断】",
      "身份：" + data.who,
      "卡点：" + data.stuck,
      "试过：" + data.tried,
      "本周最想解决：" + data.thisweek,
      "方便联系的微信：" + data.wechatContact,
      "—— 来自落地页诊断问卷（未自动提交服务器）",
    ].join("\n");
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = {
        who: (form.who.value || "").trim(),
        stuck: (form.stuck.value || "").trim(),
        tried: (form.tried.value || "").trim(),
        thisweek: (form.thisweek.value || "").trim(),
        wechatContact: (form.wechatContact.value || "").trim(),
      };
      summaryEl.textContent = buildSummary(data);
      form.hidden = true;
      cta.hidden = false;
      cta.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      cta.hidden = true;
      form.hidden = false;
      form.reset();
      var first = form.querySelector("select, input, textarea");
      if (first) first.focus();
    });
  }

  document.querySelectorAll("[data-copy-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("data-copy-target");
      var target = document.getElementById(targetId);
      if (!target) return;
      var text = target.textContent || "";
      copyText(text)
        .then(function () {
          showToast("已复制到剪贴板");
        })
        .catch(function () {
          showToast("复制失败，请手动选择文字");
        });
    });
  });

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      var open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", open ? "false" : "true");
      mobileNav.hidden = open;
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }
})();
