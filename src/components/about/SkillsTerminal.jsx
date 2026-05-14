export default function SkillsTerminal() {
  return (
    <section className="skills-section">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="dot red" />
          <div className="dot yellow" />
          <div className="dot green" />
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="prompt">tessrah@os:~</span>ls -la skills/core
          </div>
          <div className="terminal-line">drwxr-xr-x UI_DESIGN_&_SYSTEMS</div>
          <div className="terminal-line">drwxr-xr-x INTERACTION_PROTO_3D</div>
          <div className="terminal-line">drwxr-xr-x CREATIVE_CODE_GEN_ART</div>
          <div className="terminal-line">drwxr-xr-x STRATEGY_&_NARRATIVE</div>
          <div className="terminal-line" style={{ marginTop: '20px' }}>
            <span className="prompt">tessrah@os:~</span>
            grep &quot;STACK&quot; profile.json
          </div>
          <div className="terminal-line">
            {'{ "tools": ["Figma", "Three.js", "React", "Cinema4D", "Blender", "SwiftUI"] }'}
          </div>
          <div className="terminal-line">
            <span className="prompt">tessrah@os:~</span>_{' '}
            <span className="cursor" />
          </div>
        </div>
      </div>
    </section>
  )
}
