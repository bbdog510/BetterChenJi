// staffData.js - 員工資料核心
// 格式：手機號碼 (帳號) : { 密碼(生日), 姓名, 身分證(保險用), 生日(保險用) }

const STAFF_DB = {
    // === 你的管理員帳號 ===
    "0936588349": { pwd: "831222", name: "NICK", id: "A123456789", birthday: "83/12/22", origin: "管理員" },

    // === 台中 | 大遠百 (範例資料) ===
    "0910375718": { pwd: "851206", name: "曾玟傑", id: "L124868148", birthday: "85/12/06", origin: "台中|大遠百" },
    "0981305943": { pwd: "880516", name: "吳展鴻", id: "T124553470", birthday: "88/05/16", origin: "台中|大遠百" },
    "0933965014": { pwd: "860807", name: "古祐嘉", id: "H125064437", birthday: "86/08/07", origin: "台中|大遠百" },
    "0963923779": { pwd: "880224", name: "莊和翔", id: "B123278571", birthday: "88/02/24", origin: "台中|大遠百" },
    "0970697923": { pwd: "860321", name: "林哲瑋", id: "Q124231190", birthday: "86/03/21", origin: "台中|大遠百" },
    
    // === 台北 | SOGO天母店 (範例資料) ===
    "0932807867": { pwd: "850511", name: "吳梓瑋", id: "A170005883", birthday: "85/05/11", origin: "台北|SOGO天母" },
    "0975321351": { pwd: "750918", name: "黃凱嘉", id: "L123483472", birthday: "75/09/18", origin: "台北|SOGO天母" },
    "0912346281": { pwd: "890128", name: "練禹辰", id: "K123111891", birthday: "89/01/28", origin: "台北|SOGO天母" },
    
    // === 為了測試方便，你可以繼續在這裡依照格式增加 ===
};

// 輔助功能：產生文字頭像的名字 (取後兩字)
function getAvatarName(fullName) {
    if (!fullName) return "員工";
    // 如果是英文 (例如 NICK)，直接回傳
    if (/^[a-zA-Z]+$/.test(fullName)) return fullName.substring(0, 2).toUpperCase();
    
    // 中文邏輯：大於2個字取後兩字，否則取全名
    return fullName.length > 2 ? fullName.slice(-2) : fullName;
}
